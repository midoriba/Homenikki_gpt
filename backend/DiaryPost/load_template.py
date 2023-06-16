import json
import sys

args = sys.argv
if(len(args) > 2):
    input_file = args[1]
    with open(input_file, encoding='utf-8', mode='r') as f:
        new_template = f.read()
else:
    template_name = input('新しいテンプレート名:\n')
    new_template = input('新しいテンプレート:\n')

with open('home_template.json', encoding='utf-8', mode='r') as f:
    template_dic = json.load(f)

template_dic[template_name] = new_template

with open('home_template.json', encoding='utf-8', mode='w') as f:
    json.dump(template_dic, f, indent=4)