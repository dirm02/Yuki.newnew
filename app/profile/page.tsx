import { Button } from '@/components/ui/button'

export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Your Services</h2>
        <p>You haven't offered any services yet.</p>
      </div>
      <Button>Edit Profile</Button>
    </div>
  )
}

