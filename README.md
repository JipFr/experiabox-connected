# Experiabox Connected

Met deze module krijg je makkelijk de apparaten die verbonden zijn met je ExperiaBox (getest op V10)

## Installatie

Dit kan je makkelijk installeren door de relevante modules te installeren en de `getConnected` map te importeren, zie `example.js` voor een voorbeeld.

Het resultaat van `getConnected` aanroepen is een Promise, die dan een array teruggeeft met waardes. Zo'n array ziet er uit als volgt:

```JSON
[
  {
    _InstID: '...',
    AliasName: '...',
    IPAddress: 'xxx.xxx.x.x',
    HostName: 'Mijn hostnaam',
    MACAddress: 'xx:xx:xx:xx:xx:xx',
    IPV6Address: 'xxxx::xxx:xxxx:xxxx:xxxx;::;::;::;::',
    InterfaceType: '...',
    AddressSource: '...'
  }
]```
