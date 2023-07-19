import './App.css';
import Card from './Component/Card';

function App() {

  let data = [
    {
      plan: 'FREE',
      price: '0',
      user: 'Single User',
      userEnabler: true,
      storage: '5GB Storage',
      storageEnabler: true,
      publicProjects: 'Unlimited Public Projects',
      publicProjectsEnabler: true,
      access: 'Community Access',
      accessEnabler: true,
      privateProjects: 'Unlimited Private Projects',
      privateProjectsEnabler: false,
      phoneSupport: 'Dedicated Phone Support',
      phoneSupportEnabler: false,
      domian: 'Free Subdomain',
      domainEnabler: false,
      statusReports: 'Monthly Status Report',
      statusReportsEnabler: false
    },
    {
      plan: 'PLUS',
      price: '9',
      user: '5 User',
      userEnabler: true,
      storage: '50GB Storage',
      storageEnabler: true,
      publicProjects: 'Unlimited Public Projects',
      publicProjectsEnabler: true,
      access: 'Community Access',
      accessEnabler: true,
      privateProjects: 'Unlimited Private Projects',
      privateProjectsEnabler: true,
      phoneSupport: 'Dedicated Phone Support',
      phoneSupportEnabler: true,
      domian: 'Free Subdomain',
      domainEnabler: true,
      statusReports: 'Monthly Status Report',
      statusReportsEnabler: false
    },
    {
      plan: 'PRO',
      price: '49',
      user: 'Unlimited User',
      userEnabler: true,
      storage: '150GB Storage',
      storageEnabler: true,
      publicProjects: 'Unlimited Public Projects',
      publicProjectsEnabler: true,
      access: 'Community Access',
      accessEnabler: true,
      privateProjects: 'Unlimited Private Projects',
      privateProjectsEnabler: true,
      phoneSupport: 'Dedicated Phone Support',
      phoneSupportEnabler: true,
      domian: 'Free Subdomain',
      domainEnabler: true,
      statusReports: 'Monthly Status Report',
      statusReportsEnabler: true
    }
  ]
  return <>
    
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
      data.map((e,i)=>{
        return <Card details = {e} key={i}/>
      })
      }

    </div>
  </div>
</section>
</>
}

export default App;
