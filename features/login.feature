Feature: Booking.com
  #1. Para el destino buscar la Ciudad de CUSCO.
  #2. Para las fechas de estadía seleccionar desde el 14/02 al 28/02 del 2023.
  #3. Seleccionar 1 habitación, 2 adultos y 1 niño de 5 años.

  Scenario Outline: Destino

    Given I am select my destiny <Destiny>
    When I write range of date: <start> - <end> - the <monthYear>
    #Given I am select my destiny <destiny>
    #When I write range of date: <start> - <end> - the <monthYear>
    # When I am

    Examples:
      | Destiny      | start | end | monthYear     |
      | Machu Picchu | 25    | 29  | December 2022 |
