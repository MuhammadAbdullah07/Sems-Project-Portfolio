import './works.scss'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { VscArrowSwap } from "react-icons/vsc";


export default function Works() {
  return (
  <div className='works' id='works'>
    <h1>Education</h1>
    
      <VerticalTimeline className='container'>

      <VerticalTimelineElement 
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#ffffff', color: "#00000" }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(255, 150, 243)' }}
      iconStyle={{ background: 'crimson', color: '#fff' }}
      icon={<VscArrowSwap/>}>
      <h3 className="vertical-timeline-element-title">Bachelor's in Computer Science</h3>
      <h4 className="vertical-timeline-element-subtitle">Air University Islamabad</h4> 
      <p>2019 - Present</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#fff', color: '#000000' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      iconStyle={{ background: 'crimson', color: '#fff' }}
      icon={<VscArrowSwap/>}
      >
      <h3 className="vertical-timeline-element-title">FSC</h3>
      <h4 className="vertical-timeline-element-subtitle">Army Public School and College Ordnance Road Rawalpindi</h4>
      <p>2017 - 2019</p>
      </VerticalTimelineElement>
    
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#fff', color: '#000000', marginBottom:'10px'}}
      contentArrowStyle={{ borderRight: '7px solid  #15023a' }}
      iconStyle={{ background: 'crimson', color: '#fff' }}
      icon={<VscArrowSwap/>}
      >
      <h3 className="vertical-timeline-element-title">Matric</h3>
      <h4 className="vertical-timeline-element-subtitle">Army Public School and College Ordnance Road Rawalpindi</h4>
      <p>2015 - 2017</p>
      </VerticalTimelineElement>
      </VerticalTimeline>    
  </div>

  )
}
