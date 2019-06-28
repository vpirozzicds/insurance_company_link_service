const { COMPANIES_TABLE } = process.env;

const AWS = require('aws-sdk');
const uuid = require('node-uuid');

const dynamoDb = new AWS.DynamoDB.DocumentClient();


module.exports =  async (req, res) => {

    const data = req.body;

    data.id = uuid.v1();
    data.updatedAt = new Date().getTime();
  
    const params = {
      TableName: COMPANIES_TABLE,
      Item: data
    };

    try{
  
    const result = await  dynamoDb.put(params).promise();
    const response = {
      data: result.Item,
      message: `Company successfully added.`,
    }
    res.status(201).send(response)

  } catch (error) {
    res.status(500).send(error)
  }
  
}
