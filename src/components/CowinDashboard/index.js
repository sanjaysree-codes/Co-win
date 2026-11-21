// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

class CowinDashboard extends Component {
  state = {
    vaccinationLists: [],
    vaccinationByAge: [],
    vaccinationByGender: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount() {
    this.getVaccinationList()
  }

  getVaccinationList = async () => {
    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()

      const updatedDataList = data.last_7_days_vaccination.map(each => ({
        vaccineDate: each.vaccine_date,
        dose1: each.dose_1,
        dose2: each.dose_2,
      }))

      const updatedDataList1 = data.vaccination_by_age.map(each => ({
        age: each.age,
        count: each.count,
      }))

      const updatedDataList2 = data.vaccination_by_gender.map(each => ({
        count: each.count,
        gender: each.gender,
      }))

      this.setState({
        vaccinationLists: updatedDataList,
        vaccinationByAge: updatedDataList1,
        vaccinationByGender: updatedDataList2,
        isLoading: false,
      })
    } else {
      this.setState({
        isLoading: false,
        isError: true,
      })
    }
  }

  render() {
    const {
      vaccinationLists,
      vaccinationByGender,
      vaccinationByAge,
      isLoading,
      isError,
    } = this.state

    if (isLoading) {
      return (
        <div data-testid="loader">
          <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
        </div>
      )
    }

    if (isError) {
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            alt="failure view"
          />
          <h1>Something went wrong</h1>
        </div>
      )
    }
    return (
      <div className="bg-con">
        <div className="res-con">
          <div className="flex-con">
            <img
              className="plus-img"
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <p className="para">Co-WIN</p>
          </div>
          <h1 className="p1">CoWIN Vaccination in India.</h1>
          <div className="bg-con-1">
            <VaccinationCoverage vaccineDetails={vaccinationLists} />
          </div>

          <div className="bg-con-1">
            <VaccinationByGender vaccineBYGenderDetails={vaccinationByGender} />
          </div>

          <div className="bg-con-1">
            <VaccinationByAge vaccinationByAgeDetails={vaccinationByAge} />
          </div>
        </div>
      </div>
    )
  }
}
export default CowinDashboard
