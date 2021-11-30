import '../css/Tab.css'

const Tab = ({current,title,setTabs,tabs,id}) => {

    const setToCurrent = () => {
       setTabs(tabs.map(tab=>tab.id===id ? {...tab,current:true}:{...tab,current:false}))
    }

    return (
        <div onClick={setToCurrent} className={current? 'tab current' : 'tab'} >
            <span>{title}</span>
        </div>
    )
}

export default Tab
