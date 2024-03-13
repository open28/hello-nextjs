import { GlobeAltIcon } from '@heroicons/react/24/outline';
import {HomeIcon } from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <HomeIcon className="h-12 w-12 text-white-500" />
      <p className="text-[44px] text-green-500">Love Family</p>
    </div>
  );
}
