import json
import boto3

dynamodb = boto3.resource('dynamodb')
    
tableTodo = dynamodb.Table('TodoAppDatabase')
#tableProject = dynamodb.Table('TodoAppProjects')

def process_data(items):
    #print(items)
    d = {}
    d['all'] = []
    for item in items['Items']:
        #print(item)
        if item['project'] not in d:
            d[item['project']] = [item]
        else:
            d[item['project']].append(item)
        d['all'].append(item)
    #print(d)
    #res = [ {'name': p, 'data': d[p]} for p in d.keys() ]
    #print('res', res, sep='\n')
    return d

def get_all_todos_handler(event, context):
    
    items = tableTodo.scan()
    #projects = tableProject.scan()
    
    data = process_data(items)

    print('data', data, sep='\n')
    
    #print(items)
    
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps(data)
    }


if __name__ == '__main__':
    print(get_all_todos_handler('',''))