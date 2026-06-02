import { Link } from 'react-router-dom';
import { FcTemplate,FcOrgUnit  } from "react-icons/fc";
import { FaAngleRight } from "react-icons/fa6";

const ResumeHeader = () => {
  return (
   <div className='flex justify-between items-center mb-6 border-b border-gray-300 py-1'>
        <div className='flex items-center gap-2'>
          <Link to="#" className='flex items-center gap-1 text-sm text-blue-600 bg-linear-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg'>
            <FcTemplate size={16} />
            <span>Template</span>
          </Link>
          <Link to="#" className='flex items-center gap-1 text-sm text-blue-600 bg-linear-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg'>
            <FcOrgUnit  size={12} />
            <span>Accent</span>
          </Link>
        </div>
        <div className='flex items-center'>
          <Link to="#" className='flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all false'>
          Next <FaAngleRight /> 
          </Link>
        </div>
      </div>   
  )
}

export default ResumeHeader