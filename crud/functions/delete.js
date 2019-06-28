const { COMPANIES_TABLE } = process.env;

const AWS = require('aws-sdk');
 
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports =  async (req, res) => {
    const params = {
        TableName: COMPANIES_TABLE,
        Key: {id: req.params.id }
    };
    try {
        const result = await dynamoDb.delete(params).promise();
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
