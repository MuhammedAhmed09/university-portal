export const loginUser = async ({ email, password }: { email: string; password: string }): Promise<void> => {
    // (mock) محاكاه
    // simulate on call
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            if (email === 'test@example.com' && password === '123456') {
                resolve();
            } else {
                reject(new Error('Invalid email or password'));
            }
        }, 1000);
    });
};
