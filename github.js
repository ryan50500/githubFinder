class Github {
    constructor() {
        this.client_id = '40bb89330a42d194a89a';
        this.client_secret = '7cd25ede576a0fffe091a3a41520023fba54f2db';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=`);
    }
}