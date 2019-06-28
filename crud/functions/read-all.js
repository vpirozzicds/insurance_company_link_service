const { COMPANIES_TABLE } = process.env;

const AWS = require('aws-sdk');
 
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports =  async (req, res) => {
    const params = {
        TableName: COMPANIES_TABLE,
    };
    try {
        const result  = await dynamoDb.scan(params).promise();
        const { Items: companies } = result;
        res.json(companies);
    } catch (error) {
        res.status(500).json(error);
    }
}
