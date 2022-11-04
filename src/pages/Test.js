import TicketItem from '../components/TicketItem'
import TicketList from '../components/TicketList'
import TravelInfoForm from '../components/TravelInfoForm'

const Test = () => {
  const flight = {
    id: '29a7d484-89ec-400c-a181-89b82ba1b0b2',
    origin_id: '8ecd3a95-d065-4ddc-88d8-129ff49e2172',
    destination_id: 'cd7ff342-18a5-4d9b-bb82-b6060436fc18',
    layover_id: null,
    airline_name: 'Nisi Sem Semper LLP',
    departure_date: '2022-01-10T07:33:53.000Z',
    arrival_date: '2022-09-24T20:20:49.000Z',
    distance: 390,
    max_capacity: 70,
    actual_capacity: 39
  }

  return (
    <>
      <TicketList>
        <TicketItem flight={flight} />
      </TicketList>
      <TravelInfoForm
        // onSubmit={handleSubmit}
        id='travelInfoForm'
        layout='horizontal'
      />
    </>
  )
}

export default Test
