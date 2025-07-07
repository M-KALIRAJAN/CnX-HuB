import React from 'react';
import Card from '../card/Card';

import Totalsent from '../../assets/Totalsent.svg';
import Delivered from '../../assets/Delivered.svg';
import Read from '../../assets/Read.svg';
import Failed from '../../assets/Failed.svg';

export default function DashboardPage() {
  return (
    <div className="max-h-full max-w-full p-3">
<div className="flex flex-col md:flex-row gap-3 md:gap-5 justify-around items-center rounded-3xl bg-[#F8F8F8] p-3 h-auto md:h-[157px]">
  <Card
    text="Total Send"
    count="1300"
    image={Totalsent}
    bgColor="bg-[#B3D0FF]"
    textColor="text-[#3B70C7]"
  />
  <Card
    text="Delivered"
    count="1400"
    image={Delivered}
    bgColor="bg-[#CDD4FD]"
    textColor="text-[#4153BC]"
  />
  <Card
    text="Read"
    count="400"
    image={Read}
    bgColor="bg-[#EFCEFE]"
    textColor="text-[#A037CF]"
  />
  <Card
    text="Failed"
    count="1300"
    image={Failed}
    bgColor="bg-[#C5F6D1]"
    textColor="text-[#2AB17B]"
  />
</div>

    </div>
  );
}
