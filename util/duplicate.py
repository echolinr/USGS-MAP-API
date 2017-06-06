#!/usr/bin/env python
# -*- coding: UTF-8 -*-
import json
import sys
import uuid
from decimal import *

reload(sys)
sys.setdefaultencoding('utf-8')

input_file = "forecasts.json"
output_file = "dummy_data.json"
with open(input_file) as input:
    output = open(output_file, 'w')
    for line in input:
        obj = json.loads(line)
        new_line = json.dumps(obj, encoding='utf-8',
                              ensure_ascii=False) + "\n"
        output.write(new_line)
        obj["ForecastID"] = "25195502-269c-4920-8fae-1148cfe3970e"
        obj["longitude"] += 20
        obj["loc"][0] += 20
        new_line = json.dumps(obj, encoding='utf-8',
                              ensure_ascii=False) + "\n"
        output.write(new_line)
