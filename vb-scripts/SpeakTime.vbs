Dim speaks, speech 
speaks=hour(time) 
hour_now=hour(time)
min_now=Minute(time)
if hour_now > 12 or hour_now = 12 Then
ampm = "Post Meridiem"
Else
hourfinal = hour_now
ampm = "Ante Meridiem"
End If
If hour_now = 10 Then
hourfinal = "Ten"
Elseif hour_now = 11 Then
hourfinal = "Eleven"
Elseif hour_now = 12 Then
hourfinal = "Twelve"
Elseif hour_now = 13 Then
hourfinal = "Thirteen"
Elseif hour_now = 14 Then
hourfinal = "Fourteen"
Elseif hour_now = 15 Then
hourfinal = "Fifthteen"
Elseif hour_now = 16 Then
hourfinal = "Sixteen"
Elseif hour_now = 17 Then
hourfinal = "Seventeen"
Elseif hour_now = 18 Then
hourfinal = "Eighteen"
Elseif hour_now = 19 Then
hourfinal = "Nineteen"
Elseif hour_now = 20 Then
hourfinal = "Twenty"
Elseif hour_now = 21 Then
hourfinal = "Twenty-One"
Elseif hour_now = 22 Then
hourfinal = "Twenty Two"
Elseif hour_now = 23 Then
hourfinal = "Twenty Three"
Elseif hour_now = 0 Then
hourfinal = "Twenty Four"
Elseif hour_now > 0 and hour_now < 10 Then
hourfinal = hour_now
End If

if min_now > 0 and min_now < 10 Then
sayOh = "oh" 
minfinal = min_now
else
minfinal = min_now
sayOh = " "
End If
If min_now = 0 Then
minfinal = "Hundred Hours"

End If



speaks = "It's " & hourfinal & " " & sayOh & " " & minfinal & " " & ampm

Set speech=CreateObject("sapi.spvoice") 
speech.Speak speaks