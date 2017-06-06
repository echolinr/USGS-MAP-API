#!/usr/bin/env python
# -*- coding: UTF-8 -*-
import json
import sys
import uuid
from decimal import *


def format_output(obj):
    ret = "{ "
    for item in obj:
        if item in ["tstart", "tend", "ForecastID", "ForecastVersion"]:
            ret += "\"" + item + "\": \"" + str(obj[item]) + "\", "
        elif item in ["p_MMI", "p_PGA"]:
            ret += "\"" + item + "\": { "
            for it in obj[item]:
                ret += "\"" + it + "\": " + str(obj[item][it]) + ", "
            ret = ret[:-2] + " }, "
        elif item in ["longitude", "latitude"]:
            ret += "\"" + item + "\": " + str(obj[item]) + ", "
        elif item in ["loc"]:
            ret += "\"" + item + "\": " + \
                "[" + obj[item][0] + ", " + obj[item][1] + "], "
        elif item in ["Ranges"]:
            ret += "\"" + item + "\": [ "
            for i in range(len(obj[item])):
                ret += "{ "
                for it in obj[item][i]:
                    ret += "\"" + it + "\": " + obj[item][i][it] + ", "
                ret = ret[:-2] + "}, "
            ret = ret[:-2] + "], "
    ret = ret[:-2] + "}\n"
    return ret


def main(argv):
    input_file = argv[0]
    reload(sys)
    sys.setdefaultencoding('utf-8')

    output_file = "forecasts.json"

    with open(input_file) as input:
        output = open(output_file, 'w')
        for line in input:
            data_list = line.split()
            obj = {}
            # dummy ForecastID and ForecastVersion
            obj["ForecastID"] = "29042a9c-0c5c-4317-b0ad-133260a0d56f"
            obj["ForecastVersion"] = 1
            obj["tstart"] = data_list[0] + " " + data_list[1]
            obj["tend"] = data_list[2] + " " + data_list[3]
            obj["latitude"] = data_list[4]
            obj["longitude"] = data_list[5]
            obj["loc"] = [data_list[5], data_list[4]]
            ranges_list = []
            for x in range(5):
                ranges = {}
                attrs = ["minMag", "lowerBound",
                         "rate", "upperBound", "probability"]
                for i in range(5):
                    ranges[attrs[i]] = data_list[6 + 5 * x + i]
                ranges_list.append(ranges)
            obj["Ranges"] = ranges_list
            p_PGA = {}
            for i in range(15):
                p_PGA[str((i + 1) * 0.1)] = data_list[31 + i]
            obj["p_PGA"] = p_PGA
            p_MMI = {}
            MMI_index = ["I", "II", "III", "IV",
                         "V", "VI", "VII", "VIII", "IX", "X"]
            for i in range(10):
                p_MMI[MMI_index[i]] = data_list[46 + i]
            obj["p_MMI"] = p_MMI
            new_line = format_output(obj)
            output.write(new_line)
    output.close()


if __name__ == '__main__':
    main(sys.argv[1:])
    print "Done"
