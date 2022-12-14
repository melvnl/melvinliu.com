---
title: Alert Your Loves One With A Single Button
slug: alert-your-loves-one-with-a-single-button
cover: "/static/images/blogs/9.jpg"
description: Notify your loved one your whereabouts.
date: "2022-08-03"
---

# Problem

Let says, one day you decided/have to meet a new person , a complete stranger you have no information about. If you are lucky enough, you will come back home in one piece, but who knows ? your new acquintance might have a bad intention towards you, and at that moment you wish you had a preparation before, such as sending an alert message and your current location to people who you trust as a precaution if anything happen to you.

![Among UsWallpaper](https://d1lss44hh2trtw.cloudfront.net/assets/editorial/2020/09/among-us-steam-release-trailer-0-2-screenshot.png)

# Meet Soteria

![Banner](/static/images/blogs/soteria/banner.jpg)

Soteria (In Greek mythology, Soteria is the goddess of safety and salvation, deliverance, and preservation from harm) , this app send alert message and maps location to desired WhatsApp number

# Design

I learned a lot from this process especially in auto layouting component in Figma, Below is the design of the app that I have done. I want to thank Eric Angelo for the suggestion in my design process. If you guys have any suggestion and comments for the design, feel free to a comment in the comment section below!

![Design](/static/images/blogs/soteria/design.png)

# Code

There are 3 main things that I learned while making the app:
- How Swift UI works (previously using UI Kit)
- CoreLocation & MapKit
- Reverse geocoding

### CoreLocation & MapKit


Get user current latitude and longitude position
```swift
import SwiftUI
import CoreLocation
import MapKit

struct HomeView: View {
    @State private var showingAlert = false
    @ObservedObject var locationManager = LocationManager()

    var userLatitude: Double {
        return  locationManager.lastLocation?.coordinate.latitude ?? 0
    }

    var userLongitude: Double {
        return  locationManager.lastLocation?.coordinate.longitude ?? 0
    }
```

Convert latitude and longitude to an address using reverse geocode

```swift
func getAddressFromLatLon(Latitude: Double, Longitude: Double, completionHandler: @escaping CompletionHandler) {
        var center : CLLocationCoordinate2D = CLLocationCoordinate2D()

        let ceo: CLGeocoder = CLGeocoder()
        center.latitude = Latitude
        center.longitude = Longitude

        let loc: CLLocation = CLLocation(latitude:center.latitude, longitude: center.longitude)

        ceo.reverseGeocodeLocation(loc, completionHandler:
            {(placemarks, error) in
                if (error != nil)
                {
                    print("reverse geodcode fail: \(error!.localizedDescription)")
                }
                let pm = placemarks! as [CLPlacemark]

                if pm.count > 0 {
                    let pm = placemarks![0]
                    var addressString : String = ""
                    if pm.subLocality != nil {
                        addressString = addressString + pm.subLocality! + ", "
                    }
                    if pm.thoroughfare != nil {
                        addressString = addressString + pm.thoroughfare! + ", "
                    }
                    if pm.locality != nil {
                        addressString = addressString + pm.locality! + ", "
                    }
                    if pm.country != nil {
                        addressString = addressString + pm.country! + ", "
                    }
                    if pm.postalCode != nil {
                        addressString = addressString + pm.postalCode! + " "
                    }

                    completionHandler(true, addressString)
              }
        })
    }
```

Call the function and do something if the function is successfully called
```swift
getAddressFromLatLon(Latitude: userLatitude, Longitude: userLongitude){ (success, addressString) in
            if success {
                ....
        }
```

Since I want to send a message to a WhatsApp number that contain text and an google maps url, hence above code look like this.

```swift
getAddressFromLatLon(Latitude: userLatitude, Longitude: userLongitude){ (success, addressString) in
           if success {
                // get saved phoneNumber in user default
                let phoneNumber = UserDefaults.standard.string(forKey: "phoneNumber") ?? "0"

                if (phoneNumber == "0")
                {
                    showingAlert = !showingAlert
                }

                else{

                    let targetAddress = addressString.replacingOccurrences(of: " ", with: "%20")

                    let gmapUrl = "https://maps.google.com/?q=\(userLatitude),\(userLongitude)"

                    if let url = URL(string: "https://api.whatsapp.com/send/?phone=\( phoneNumber)&text=Help!%20Sender%20Sedang%20Dalam%20Masalah!%20Koordinate%20di%20Alamat%20di%20\(targetAddress)%20\(gmapUrl)&type=phone_number&app_absent=0"),

                            UIApplication.shared.canOpenURL(url) {
                               UIApplication.shared.open(url, options: [:])
                            }
                }
            }

        }
```

 UIApplication.shared.canOpenURL(url) is an instance method that returns a Boolean value that indicates whether an app is available to handle a URL scheme, in this case, it's WhatsApp.

# Demo

Check the demonstration video
[https://youtube.com/shorts/PNHZ9oppUDA](https://youtube.com/shorts/PNHZ9oppUDA)
