# Convertidor de unidades

Modulo que permite convertir medidas de peso

## Medidas soportadas

- Libras
- Kilogramos
- Onzas

## Funciones disponibles

- ```poundsToKilograms(...pounds)```: Convierte una o varias libras a kilogramos

- ```poundsToOunces(...pounds)```: Convierte una o varias libras a onzas

- ```kilogramsToPounds(...kilograms)```: Convierte un o varios kilogramos a libras

- ```kilogramsToOunces(...kilograms)```: Convierte un o varios kilogramos a onzas

- ```ouncesToPounds(...ounces)```: Convierte una o varios onzas a libras

- ```ouncesToKilograms(...ounces)```: Convierte una o varios onzas a kilogramos

## Instalación

``` npm install @allinsonmota/converter ```

## Uso

``` javascript 
import { Converter } from '@allinsonmota/converter'

const converter = new Converter()

converter.poundsToOunces(1) // 16
converter.poundsToOunces(1,2) // [16,32]

converter.poundsToKilograms(1) // 0.453592
converter.poundsToKilograms(1,2) // [0.453592,0.907184]

converter.kilogramsToPounds(1) //2.204623
converter.kilogramsToPounds(1,2) // [2.204623,4.409246]

converter.kilogramsToOunces(1) //35.27396
converter.kilogramsToOunces(1,2) // [35.27396, 70.54792]

converter.ouncesToPounds(1) // 0.0625
converter.ouncesToPounds(1,2) // [0.0625, 0.125]

converter.ouncesToKilograms(1) // 0.02835
converter.ouncesToKilograms(1,2) // [0.02835, 0.0567]
```

## Próximamente

- Se incluirán nuevas medidas de peso (**Toneladas**, **Gramos**, **Miligramos**, etc)
- Se incluirán medidas de distancia (**Kilometros**, **Metros**, **Centimetros**, **Yardas**, etc)
- Precisión de decimales

## Créditos

[Allinson Mota](https://twitter.com/allinsonmota)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
