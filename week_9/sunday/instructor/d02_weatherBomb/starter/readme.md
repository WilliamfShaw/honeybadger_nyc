# WthrGifBMB(w/MAPS)!!!!

Here is the documentation for the [Open Weather Map API](http://openweathermap.org/api)

#### Step 1 - Hit Open Weather Map API

Fire few test requests to the Open Weather Map API server.  An overview on how to do this can be found [here](http://openweathermap.org/current).

Test a few different API requests.  See what happens when you change the values for the different parameters.
	* What does the `q` parameter do?
	* What does the `units` parameter do?
	* What does the `lang` parameter do?

Explore the responses that are sent back and think about how you can use the data therein to make some stuff happen on the browser.

Also, take note of how some requests are responded to and try to plan for ways to overcome these irregularities.

#### Step 2 - Parse the feed and make an object.

Write a function that takes the API response from Open Weather Map, and turns it into an object with the following construction:

```
{
	cityName: city,
	temperature: temperature (in degrees F or C),
	description: one word description of the weather,
	lat: city lattitude,
	lon: city longitude
}
```

#### Step 3 - Display on the DOM

Write another function that takes the object from step 2 and use it to put info to the DOM using jQuery.

This should at first work just by calling the function in the console AND THEN work by taking inputs from buttons/input fields on the DOM.
