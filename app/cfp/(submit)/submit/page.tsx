"use client"
import Title from '@/components/cfp/Title'
import Event, { EventType } from '@/components/cfp/Event'
import { useReducer } from 'react'

export default function Page() {
  const [type, toggleTyoe] = useReducer((state: EventType | '', action: EventType | '') => {
    if (state === '') return action
    if (state === action) return ''
    else return action
  }, '')

  return (
    <div className="flex flex-col gap-6">
      <Title content="投稿頁面" />

      {/* count down */}
      <div className="flex flex-col items-center gap-4">
        <p>距離投稿截止還有：</p>
        <div className="w-full border-[#E5C366] border-2 rounded-full py-[50px] px-[100px] grid grid-cols-4">
          <span className="text-[#FF3495] text-6xl text-center">
            99
          </span>
          <span className="text-[#46A5FD] text-6xl text-center">
            99
          </span>
          <span className="text-[#0CE295] text-6xl text-center">
            99
          </span>
          <span className="text-[#AC24FF] text-6xl text-center">
            99
          </span>
          <span className="font-medium text-[#E5C366] text-center">
            DAYS
          </span>
          <span className="font-medium text-[#E5C366] text-center">
            HOURS
          </span>
          <span className="font-medium text-[#E5C366] text-center">
            MINUTES
          </span>
          <span className="font-medium text-[#E5C366] text-center">
            SECONDS
          </span>
        </div>
        <p className="text-sm font-bold">截止日期</p>
        <p>即日起至 2024 年 1 月 20 日（六）23:59</p>
      </div>

      {/* submit botton */}
      <div className="flex justify-center">
        <button className="bg-[#E5C366] text-white h-[60px] w-[196px] rounded-full">
          立刻投稿
        </button>
      </div>

      {/* time table */}
      <div className="flex flex-col gap-4 pt-16">
        <div className="flex items-center gap-6">
          <h2 className="text-[32px] font-medium">時程表</h2>
          <button
            className="bg-[#AC24FF1A] text-[#AC24FF] rounded-full w-[110px] h-[40px] flex justify-center items-center"
            onClick={() => toggleTyoe('general')}
          >
            一般議程
          </button>
          <button
            className="text-[#FF3495] border border-[#FF3495] rounded-full w-[110px] h-[40px] flex justify-center items-center"
            onClick={() => toggleTyoe('undefined')}
          >
            開放式議程
          </button>
          <button
            className="text-[#0CE295] border border-[#0CE295] rounded-full w-[110px] h-[40px] flex justify-center items-center"
            onClick={() => toggleTyoe('poster')}
          >
            海報
          </button>
        </div>

        <div>
          <Event
            time={[2023, 'Nov.', 19]}
            type={['general', 'undefined', 'poster']}
            selectedType={type}
            name="開始徵稿"
          />
          <Event
            time={[2024, 'Jan.', 20]}
            type={['general', 'undefined', 'poster']}
            selectedType={type}
            name="投稿截止"
            desc="至 2024 年 1 月 20 日（六）23:59"
          />
          <Event
            time={[2024, 'Jan.', '下旬']}
            type={['general', 'undefined', 'poster']}
            selectedType={type}
            name="稿件錄取通知"
          />
          <Event
            time={[2024, 'Jan.', '下旬']}
            endTime={[2024, 'Feb.', '中旬']}
            type={['general', 'undefined']}
            selectedType={type}
            name="試講"
            desc="若稿件入選，確切時間將再與您協調"
          />
          <Event
            time={[2024, 'Feb.', 18]}
            type={['poster']}
            selectedType={type}
            name="錄取海報檔案上傳截止"
          />
          <Event
            time={[2024, 'Mar.', 8]}
            type={['general', 'undefined']}
            selectedType={type}
            name="彩排"
          />
          <Event
            time={[2024, 'Mar.', 9]}
            type={['SITCON']}
            selectedType={type}
            name="年會"
          />
        </div>
      </div>
    </div>
  )
}
