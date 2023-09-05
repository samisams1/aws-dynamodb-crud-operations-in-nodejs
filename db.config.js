/*import AWS from 'aws-sdk'
import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";
AWS.config.update({
    region: "us-east-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const db = new AWS.DynamoDB.DocumentClient()

const Table = 'users'

export {
    db,
    Table
}
*/

import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

const region = "us-east-1";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const client = new DynamoDBClient({ region, credentials: { accessKeyId, secretAccessKey } });
const db = DynamoDBDocument.from(client);

const Table = 'users';

export {
    db,
    Table
};