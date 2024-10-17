import { OptionList } from '@/types/optionLayout';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function MobileTitleLayout ({optionName, modelName, clickBtn}: {optionName:string; modelName:string; clickBtn:(e:React.MouseEvent<HTMLButtonElement>, direction?: string) => void}) {

  const optionList: OptionList = {
    detail: '모델 상세',
    engine: '엔진 타입',
    drivetrain: '구동 타입',
    passenger: `${modelName === 'g80' ? '스포츠 패키지' : '시트 구성'}`,
    exterior: '외장 컬러',
    interior: '내장디자인 & 컬러',
    garnish: '내장가니쉬',
    wheel: '휠 & 타이어',
    add: '선택 품목',
    payments: '결제',
  };
  
  return (
    <>
      <aside className='hidden max-[1366px]:flex flex-col items-center w-full h-min justify-self-center px-[7%] mt-[70px]'>
          <h2 className='text-[28px] w-[95%] text-center leading-none font-black font-Hyundai-sans border-b-[1px] border-[#666] pb-[1%]'>{modelName.split('-').join(' ').toUpperCase()}</h2>
          <div className='w-full grid grid-cols-[1fr_2fr_1fr] auto-rows-[40px] items-center'>

            <button className="border-none w-full h-full relative text-[#666] hover:text-white" 
            onClick={(e) => clickBtn(e, 'prev')}
            >
              <figure className="absolute aspect-[1/2] h-[25px] top-[50%] translate-y-[-50%] left-[15%]">
                <FontAwesomeIcon icon={faChevronLeft} className='transition-colors text-[25px]'/>
              </figure>
            </button>
            <h3 className='leading-none text-[20px] justify-self-center'>{optionList[optionName]}</h3>
            <button className="border-none w-full h-full relative text-[#666] hover:text-white" 
            onClick={clickBtn}
            >
              <figure className="absolute aspect-[1/2] h-[25px] top-[50%] translate-y-[-50%] right-[15%]">
                <FontAwesomeIcon icon={faChevronRight} className=' transition-colors text-[25px]'/>
              </figure>
            </button>
          </div>
        </aside>
    </>
  )
}