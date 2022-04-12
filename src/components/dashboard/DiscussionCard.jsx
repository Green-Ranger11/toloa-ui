import React from 'react';

function DiscussionCard() {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-md border border-slate-200 pb-5">
      <div className="px-5 pt-5">
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Discussions</h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Activity this month</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">4,489</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-blue-300 rounded-full">-14%</div>
        </div>
      </div>
    </div>
  );
}

export default DiscussionCard;
