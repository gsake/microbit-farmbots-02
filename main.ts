led.enable(false)
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
lcd1602.putString(
"Connecting...",
0,
0
)
Farmbots.wifiSettings(SerialPin.P0, SerialPin.P1, BaudRate.BaudRate115200)
Farmbots.wifiConnect("VODAFONE_GS", "2106019487")
if (Farmbots.wifiConnected()) {
    lcd1602.putString(
    "Wifi Connected",
    0,
    0
    )
} else {
    lcd1602.putString(
    "Connection Error",
    0,
    0
    )
}
