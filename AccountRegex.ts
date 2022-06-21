export class AccountRegex {
    // cho phép kí tự _ , các chữ thường a-z hoặc 0-9 và ít nhất 6 kí tự
    private ACCOUNT_REGEX: RegExp = /^[_a-z0-9]{6,}$/;
    
    public validate(regex: string): boolean {
        return this.ACCOUNT_REGEX.test(regex);
    }
}