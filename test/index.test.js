import { handler } from '../index.js'

describe('node-lambda-test test suite', () => {

    it('test the handler result', async () => {
        const response = await handler();
        expect(response.info).toBeDefined();
        expect(response.info).toStrictEqual('Hello from AWS Lambda!');
    });

});