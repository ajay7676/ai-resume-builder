import PersonalInfoForm from './PersonalInfoForm'
import ResumeHeader from './ResumeHeader';


const ResumeSidebar = () => {
  return (
     <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
      <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1'>
      <hr className="absolute top-0 left-0 right-0 border-2 border-gray-200"></hr>       
      <hr className="absolute top-0 left-0  h-1 bg-linear-to-r from-green-500 to-green-600 border-none transition-all duration-2000"></hr> 
      <ResumeHeader />   
      <PersonalInfoForm />
      </div>
    </div>
  )
}

export default ResumeSidebar