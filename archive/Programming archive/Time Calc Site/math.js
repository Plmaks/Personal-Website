function math() {
    var time_seconds = document.getElementById("hours_spent").value * document.getElementById("times_per_week").value * document.getElementById("months_spent").value * 60 * 60 
    var time_minutes = document.getElementById("hours_spent").value * document.getElementById("times_per_week").value * document.getElementById("months_spent").value * 60
    var time_hours = document.getElementById("hours_spent").value * document.getElementById("times_per_week").value * document.getElementById("months_spent").value
    var time_days = document.getElementById("hours_spent").value * document.getElementById("times_per_week").value * document.getElementById("months_spent").value  / 24 
    var time_months = document.getElementById("hours_spent").value * document.getElementById("times_per_week").value * document.getElementById("months_spent").value / 720 
    var time_years = document.getElementById("hours_spent").value * document.getElementById("times_per_week").value * document.getElementById("months_spent").value / 8640
    activity = document.getElementById("name_of_activity").value

    console.log("Time calc log:")
    console.log(time_seconds)
    console.log(time_minutes)
    console.log(time_hours)
    console.log(time_days)
    console.log(time_months)
    console.log(time_years)

    document.getElementById("thing").innerHTML = activity
    document.getElementById("seconds").innerHTML = time_seconds
    document.getElementById("minutes").innerHTML = time_minutes
    document.getElementById("hours").innerHTML = time_hours
    document.getElementById("days").innerHTML = time_days
    document.getElementById("months").innerHTML = time_months
    document.getElementById("years").innerHTML = time_years
}