export const handler = async (event, context) => {
    console.log('EVENT: \n' + JSON.stringify(event, null, 2));
    return { info: 'Hello from AWS Lambda!' };
};