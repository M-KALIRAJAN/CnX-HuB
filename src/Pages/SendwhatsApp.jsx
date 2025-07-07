import React, { useState } from 'react'
import Inputs from '../utils/Inputs'
import Button from '../components/Button/Button'
import { FaSearch } from 'react-icons/fa'
import SelectInput from '../utils/SelectInput'

export default function SendwhatsApp() {
  const [number, setNumber] = useState("")

  const templateOptions = [
  { value: 'normaltemplate', label: 'Normal Template' },
  { value: '+1', label: '+1' },
  { value: '+44', label: '+44' },
  { value: '+61', label: '+61' }
];
  return (
    <div className='border border-gray-400 h-[500px] w-[716px] p-3 rounded-2xl'>

      <div className="w-[660px] lg:w-[300px] h-[200px] rounded-2xl bg-gray-200 p-4">
        <div className="flex justify-between items-start mb-4 gap-4">

          {/* Phone number input */}
          <div className="w-[310px]">
            <Inputs
              label="Phone number"
              name="number"
              type="number"
              placeholder="998798656"
              value={number}
              onChange={setNumber}
            />
          </div>

         
          {/* <div className="w-[310px]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Template
            </label>
            <select
              className="w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:color"
              defaultValue="normaltemplate"
            >
              <option value="normaltemplate">normaltemplate</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
            </select>
          </div> */}
          <div className="w-[310px]">
          <SelectInput
            label="Select Template"
      options={templateOptions}
      defaultValue="normaltemplate"
      onChange={(e) => console.log(e.target.value)} 
          />
</div>
        </div>

        <Button
          text="Search"
          onClick={() => console.log("Search clicked")}
          icon={<FaSearch className="text-white text-sm" />}
        />
      </div>

    </div>
  )
}
