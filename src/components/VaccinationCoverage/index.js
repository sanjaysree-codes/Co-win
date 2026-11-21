// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const {vaccineDetails} = props
  console.log(vaccineDetails)
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <>
      <h1 className="head">Vaccination Coverage</h1>

      <BarChart width={1000} height={300} data={vaccineDetails}>
        <XAxis
          dataKey="vaccineDate"
          interval={0}
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            fill: 'gray',
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 10,
          }}
        />
        <Bar
          dataKey="dose1"
          radius={[10, 10, 0, 0]}
          name="Dose1"
          fill="#5a8dee"
          barSize={45}
        />
        <Bar
          dataKey="dose2"
          radius={[10, 10, 0, 0]}
          name="Dose2"
          fill="#f54394"
          barSize={45}
        />
      </BarChart>
    </>
  )
}
export default VaccinationCoverage
