import { validateUrl } from '../client/js/urlValidator';

describe("Test form handler", () => {
    test("It should exist", () => {
        expect(validateUrl()).toBeDefined();
    });
});