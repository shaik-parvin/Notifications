const Notification = props => {
  //  Write your code here.
  const {className, text, url} = props
  const containerClassname = `notification-container ${className}`
  return (
    <div className={containerClassname}>
      <img src={url} className='icon' />
      <p className='paragraph'>{text}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 class='heading'>Notifications</h1>
    <div class='card'>
      <Notification
        className='info-bg'
        text='Information Message'
        url='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      />
      <Notification
        className='success-bg'
        text='Success Message'
        url='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      />
      <Notification
        className='warn-bg'
        text='Warning Message'
        url='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      />
      <Notification
        className='danger-bg'
        text='Error Message'
        url='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
