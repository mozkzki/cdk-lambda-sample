from chronyk import Chronyk


def handler(event, context):
    print("This is a foo!!!!!!!!!")
    print(Chronyk("now").ctime())
    return {"statusCode": 200, "body": "This is a foo!"}
