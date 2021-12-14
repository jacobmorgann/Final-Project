class Cookie {
    constructor(cookieName, calories,cookieNumber) {
        this.cookieName = cookieName;
        this.calories = calories;
        this.cookieNumber = cookieNumber
    }
    amountCalories() {
        if (this.calories > 500)
            return "Very Unhealthy!"
        else if (this.calories > 400)
            return "Unhealthy!"
        else if (this.calories > 300)
            return "Starting to get Unhealthy!"
        else if (this.calories > 200)
            return "Healthy!"
        else
            return "Very Healthy!"
    }
    cookieInfo() {
        let health = this.amountCalories();
        return `You entered ${this.cookieName}, Your cookie is ${health} : Amount of calories -> ${this.calories}`
    }
}