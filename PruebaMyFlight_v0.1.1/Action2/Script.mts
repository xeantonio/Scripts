'***** Reservar viaje
'*** Actualización 01

WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "Frankfurt" @@ hightlight id_;_1970380952_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "London" @@ hightlight id_;_2029966648_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfImage("WpfImage_3").Click 12,10 @@ hightlight id_;_1974716792_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfCalendar("do.").SetDate "30-Sep-2018" @@ hightlight id_;_1974718856_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("Class").Select "Business" @@ hightlight id_;_2029972744_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_2029979128_;_script infofile_;_ZIP::ssf18.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2000781912_;_script infofile_;_ZIP::ssf19.xml_;_


'***** Seleccionar Viaje

WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 1,0 @@ hightlight id_;_1974722696_;_script infofile_;_ZIP::ssf20.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1974722264_;_script infofile_;_ZIP::ssf21.xml_;_


'***** Detalles del Ticket


WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "Juan Perez" @@ hightlight id_;_1998021776_;_script infofile_;_ZIP::ssf26.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click @@ hightlight id_;_1998003968_;_script infofile_;_ZIP::ssf27.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order 88 completed").Output CheckPoint("Order 88 completed") @@ hightlight id_;_1970997488_;_script infofile_;_ZIP::ssf23.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("$400.80").Output CheckPoint("$400.80") @@ hightlight id_;_2016203248_;_script infofile_;_ZIP::ssf24.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("12097 BA").Output CheckPoint("NumVuelo") @@ hightlight id_;_1992591912_;_script infofile_;_ZIP::ssf28.xml_;_
wait(10)
WpfWindow("HPE MyFlight Sample Applicatio").Close @@ hightlight id_;_136272_;_script infofile_;_ZIP::ssf25.xml_;_
