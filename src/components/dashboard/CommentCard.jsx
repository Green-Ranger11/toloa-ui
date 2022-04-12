import React from 'react';

function CommentCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-md border border-slate-200 pb-5">
      <div className="px-5 pt-5">
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Comments</h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Sales</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">9,962</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-blue-700 rounded-full">+49%</div>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
