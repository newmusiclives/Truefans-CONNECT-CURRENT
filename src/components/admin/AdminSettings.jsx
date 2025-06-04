import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../ui/Button'

const AdminSettings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'TrueFans CONNECT',
    siteDescription: 'Revolutionary Artist Support Platform',
    contactEmail: 'support@truefans.com',
    supportPhone: '(555) 123-4567',
    timezone: 'America/New_York',
    dateFormat: 'MM/DD/YYYY',
    currency: 'USD',
    language: 'en-US',
  })
  
  const [emailSettings, setEmailSettings] = useState({
    fromName: 'TrueFans Support',
    fromEmail: 'support@truefans.com',
    replyToEmail: 'no-reply@truefans.com',
    smtpHost: 'smtp.truefans.com',
    smtpPort: '587',
    smtpUsername: 'smtp_user',
    smtpPassword: '••••••••••••',
    enableSsl: true,
  })
  
  const [notificationSettings, setNotificationSettings] = useState({
    newArtistSignup: true,
    newVenueSignup: true,
    newDonation: true,
    payoutProcessed: true,
    systemAlerts: true,
    marketingEmails: false,
    weeklyReports: true,
    monthlyReports: true,
  })
  
  const [securitySettings, setSecuritySettings] = useState({
    requireEmailVerification: true,
    twoFactorAuth: true,
    sessionTimeout: '30',
    passwordMinLength: '10',
    passwordRequireUppercase: true,
    passwordRequireNumber: true,
    passwordRequireSymbol: true,
    maxLoginAttempts: '5',
  })
  
  const [activeTab, setActiveTab] = useState('general')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  
  const handleGeneralChange = (e) => {
    const { name, value } = e.target
    setGeneralSettings({
      ...generalSettings,
      [name]: value
    })
  }
  
  const handleEmailChange = (e) => {
    const { name, value, type, checked } = e.target
    setEmailSettings({
      ...emailSettings,
      [name]: type === 'checkbox' ? checked : value
    })
  }
  
  const handleNotificationChange = (e) => {
    const { name, checked } = e.target
    setNotificationSettings({
      ...notificationSettings,
      [name]: checked
    })
  }
  
  const handleSecurityChange = (e) => {
    const { name, value, type, checked } = e.target
    setSecuritySettings({
      ...securitySettings,
      [name]: type === 'checkbox' ? checked : value
    })
  }
  
  const handleSaveSettings = () => {
    // In a real application, this would save to a database or configuration file
    console.log('Saving settings:', {
      generalSettings,
      emailSettings,
      notificationSettings,
      securitySettings
    })
    
    // Show success message
    setShowSuccessMessage(true)
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 3000)
  }
  
  return (
    <SettingsContainer>
      <SettingsHeader>
        <SettingsTitle>System Settings</SettingsTitle>
        <SaveButton 
          variant="primary" 
          size="md" 
          onClick={handleSaveSettings}
        >
          💾 Save Changes
        </SaveButton>
      </SettingsHeader>
      
      {showSuccessMessage && (
        <SuccessMessage>
          <SuccessIcon>✅</SuccessIcon>
          Settings saved successfully!
        </SuccessMessage>
      )}
      
      <SettingsTabs>
        <SettingsTab 
          active={activeTab === 'general'} 
          onClick={() => setActiveTab('general')}
        >
          🌐 General
        </SettingsTab>
        <SettingsTab 
          active={activeTab === 'email'} 
          onClick={() => setActiveTab('email')}
        >
          ✉️ Email
        </SettingsTab>
        <SettingsTab 
          active={activeTab === 'notifications'} 
          onClick={() => setActiveTab('notifications')}
        >
          🔔 Notifications
        </SettingsTab>
        <SettingsTab 
          active={activeTab === 'security'} 
          onClick={() => setActiveTab('security')}
        >
          🔒 Security
        </SettingsTab>
      </SettingsTabs>
      
      <SettingsContent>
        {activeTab === 'general' && (
          <SettingsForm>
            <SettingsSection>
              <SectionTitle>Site Information</SectionTitle>
              <FormGroup>
                <FormLabel>Site Name</FormLabel>
                <FormInput 
                  type="text" 
                  name="siteName" 
                  value={generalSettings.siteName}
                  onChange={handleGeneralChange}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Site Description</FormLabel>
                <FormTextarea 
                  name="siteDescription" 
                  value={generalSettings.siteDescription}
                  onChange={handleGeneralChange}
                  rows="3"
                />
              </FormGroup>
            </SettingsSection>
            
            <SettingsSection>
              <SectionTitle>Contact Information</SectionTitle>
              <FormGroup>
                <FormLabel>Contact Email</FormLabel>
                <FormInput 
                  type="email" 
                  name="contactEmail" 
                  value={generalSettings.contactEmail}
                  onChange={handleGeneralChange}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Support Phone</FormLabel>
                <FormInput 
                  type="text" 
                  name="supportPhone" 
                  value={generalSettings.supportPhone}
                  onChange={handleGeneralChange}
                />
              </FormGroup>
            </SettingsSection>
            
            <SettingsSection>
              <SectionTitle>Regional Settings</SectionTitle>
              <FormRow>
                <FormGroup>
                  <FormLabel>Timezone</FormLabel>
                  <FormSelect 
                    name="timezone" 
                    value={generalSettings.timezone}
                    onChange={handleGeneralChange}
                  >
                    <option value="America/New_York">Eastern Time (ET)</option>
                    <option value="America/Chicago">Central Time (CT)</option>
                    <option value="America/Denver">Mountain Time (MT)</option>
                    <option value="America/Los_Angeles">Pacific Time (PT)</option>
                    <option value="Europe/London">London (GMT)</option>
                    <option value="Europe/Paris">Paris (CET)</option>
                    <option value="Asia/Tokyo">Tokyo (JST)</option>
                  </FormSelect>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Date Format</FormLabel>
                  <FormSelect 
                    name="dateFormat" 
                    value={generalSettings.dateFormat}
                    onChange={handleGeneralChange}
                  >
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </FormSelect>
                </FormGroup>
              </FormRow>
              <FormRow>
                <FormGroup>
                  <FormLabel>Currency</FormLabel>
                  <FormSelect 
                    name="currency" 
                    value={generalSettings.currency}
                    onChange={handleGeneralChange}
                  >
                    <option value="USD">US Dollar (USD)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="GBP">British Pound (GBP)</option>
                    <option value="CAD">Canadian Dollar (CAD)</option>
                    <option value="AUD">Australian Dollar (AUD)</option>
                    <option value="JPY">Japanese Yen (JPY)</option>
                  </FormSelect>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Language</FormLabel>
                  <FormSelect 
                    name="language" 
                    value={generalSettings.language}
                    onChange={handleGeneralChange}
                  >
                    <option value="en-US">English (US)</option>
                    <option value="en-GB">English (UK)</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="ja">Japanese</option>
                  </FormSelect>
                </FormGroup>
              </FormRow>
            </SettingsSection>
          </SettingsForm>
        )}
        
        {activeTab === 'email' && (
          <SettingsForm>
            <SettingsSection>
              <SectionTitle>Email Sender Information</SectionTitle>
              <FormGroup>
                <FormLabel>From Name</FormLabel>
                <FormInput 
                  type="text" 
                  name="fromName" 
                  value={emailSettings.fromName}
                  onChange={handleEmailChange}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>From Email</FormLabel>
                <FormInput 
                  type="email" 
                  name="fromEmail" 
                  value={emailSettings.fromEmail}
                  onChange={handleEmailChange}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Reply-To Email</FormLabel>
                <FormInput 
                  type="email" 
                  name="replyToEmail" 
                  value={emailSettings.replyToEmail}
                  onChange={handleEmailChange}
                />
              </FormGroup>
            </SettingsSection>
            
            <SettingsSection>
              <SectionTitle>SMTP Configuration</SectionTitle>
              <FormGroup>
                <FormLabel>SMTP Host</FormLabel>
                <FormInput 
                  type="text" 
                  name="smtpHost" 
                  value={emailSettings.smtpHost}
                  onChange={handleEmailChange}
                />
              </FormGroup>
              <FormRow>
                <FormGroup>
                  <FormLabel>SMTP Port</FormLabel>
                  <FormInput 
                    type="text" 
                    name="smtpPort" 
                    value={emailSettings.smtpPort}
                    onChange={handleEmailChange}
                  />
                </FormGroup>
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="enableSsl" 
                      checked={emailSettings.enableSsl}
                      onChange={handleEmailChange}
                    />
                    Enable SSL/TLS
                  </FormCheckboxLabel>
                </FormGroup>
              </FormRow>
              <FormGroup>
                <FormLabel>SMTP Username</FormLabel>
                <FormInput 
                  type="text" 
                  name="smtpUsername" 
                  value={emailSettings.smtpUsername}
                  onChange={handleEmailChange}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>SMTP Password</FormLabel>
                <FormInput 
                  type="password" 
                  name="smtpPassword" 
                  value={emailSettings.smtpPassword}
                  onChange={handleEmailChange}
                />
              </FormGroup>
              <FormActions>
                <Button 
                  variant="outline" 
                  size="sm"
                >
                  Test Connection
                </Button>
              </FormActions>
            </SettingsSection>
          </SettingsForm>
        )}
        
        {activeTab === 'notifications' && (
          <SettingsForm>
            <SettingsSection>
              <SectionTitle>Email Notifications</SectionTitle>
              <NotificationGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="newArtistSignup" 
                    checked={notificationSettings.newArtistSignup}
                    onChange={handleNotificationChange}
                  />
                  New Artist Signup
                </FormCheckboxLabel>
                <NotificationDescription>
                  Receive an email when a new artist registers on the platform.
                </NotificationDescription>
              </NotificationGroup>
              
              <NotificationGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="newVenueSignup" 
                    checked={notificationSettings.newVenueSignup}
                    onChange={handleNotificationChange}
                  />
                  New Venue Signup
                </FormCheckboxLabel>
                <NotificationDescription>
                  Receive an email when a new venue registers on the platform.
                </NotificationDescription>
              </NotificationGroup>
              
              <NotificationGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="newDonation" 
                    checked={notificationSettings.newDonation}
                    onChange={handleNotificationChange}
                  />
                  New Donation
                </FormCheckboxLabel>
                <NotificationDescription>
                  Receive an email when a new donation is made.
                </NotificationDescription>
              </NotificationGroup>
              
              <NotificationGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="payoutProcessed" 
                    checked={notificationSettings.payoutProcessed}
                    onChange={handleNotificationChange}
                  />
                  Payout Processed
                </FormCheckboxLabel>
                <NotificationDescription>
                  Receive an email when a payout is processed.
                </NotificationDescription>
              </NotificationGroup>
              
              <NotificationGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="systemAlerts" 
                    checked={notificationSettings.systemAlerts}
                    onChange={handleNotificationChange}
                  />
                  System Alerts
                </FormCheckboxLabel>
                <NotificationDescription>
                  Receive important system alerts and notifications.
                </NotificationDescription>
              </NotificationGroup>
            </SettingsSection>
            
            <SettingsSection>
              <SectionTitle>Report Notifications</SectionTitle>
              <NotificationGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="weeklyReports" 
                    checked={notificationSettings.weeklyReports}
                    onChange={handleNotificationChange}
                  />
                  Weekly Reports
                </FormCheckboxLabel>
                <NotificationDescription>
                  Receive weekly summary reports of platform activity.
                </NotificationDescription>
              </NotificationGroup>
              
              <NotificationGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="monthlyReports" 
                    checked={notificationSettings.monthlyReports}
                    onChange={handleNotificationChange}
                  />
                  Monthly Reports
                </FormCheckboxLabel>
                <NotificationDescription>
                  Receive monthly financial and activity reports.
                </NotificationDescription>
              </NotificationGroup>
              
              <NotificationGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="marketingEmails" 
                    checked={notificationSettings.marketingEmails}
                    onChange={handleNotificationChange}
                  />
                  Marketing Emails
                </FormCheckboxLabel>
                <NotificationDescription>
                  Receive marketing and promotional emails.
                </NotificationDescription>
              </NotificationGroup>
            </SettingsSection>
          </SettingsForm>
        )}
        
        {activeTab === 'security' && (
          <SettingsForm>
            <SettingsSection>
              <SectionTitle>Account Security</SectionTitle>
              <NotificationGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="requireEmailVerification" 
                    checked={securitySettings.requireEmailVerification}
                    onChange={handleSecurityChange}
                  />
                  Require Email Verification
                </FormCheckboxLabel>
                <NotificationDescription>
                  New users must verify their email address before accessing the platform.
                </NotificationDescription>
              </NotificationGroup>
              
              <NotificationGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="twoFactorAuth" 
                    checked={securitySettings.twoFactorAuth}
                    onChange={handleSecurityChange}
                  />
                  Enable Two-Factor Authentication
                </FormCheckboxLabel>
                <NotificationDescription>
                  Require two-factor authentication for admin accounts.
                </NotificationDescription>
              </NotificationGroup>
              
              <FormGroup>
                <FormLabel>Session Timeout (minutes)</FormLabel>
                <FormInput 
                  type="number" 
                  name="sessionTimeout" 
                  value={securitySettings.sessionTimeout}
                  onChange={handleSecurityChange}
                  min="5"
                  max="120"
                />
                <FormHint>
                  Automatically log out users after this period of inactivity.
                </FormHint>
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Maximum Login Attempts</FormLabel>
                <FormInput 
                  type="number" 
                  name="maxLoginAttempts" 
                  value={securitySettings.maxLoginAttempts}
                  onChange={handleSecurityChange}
                  min="3"
                  max="10"
                />
                <FormHint>
                  Lock account after this many failed login attempts.
                </FormHint>
              </FormGroup>
            </SettingsSection>
            
            <SettingsSection>
              <SectionTitle>Password Requirements</SectionTitle>
              <FormGroup>
                <FormLabel>Minimum Password Length</FormLabel>
                <FormInput 
                  type="number" 
                  name="passwordMinLength" 
                  value={securitySettings.passwordMinLength}
                  onChange={handleSecurityChange}
                  min="8"
                  max="20"
                />
              </FormGroup>
              
              <NotificationGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="passwordRequireUppercase" 
                    checked={securitySettings.passwordRequireUppercase}
                    onChange={handleSecurityChange}
                  />
                  Require Uppercase Letter
                </FormCheckboxLabel>
              </NotificationGroup>
              
              <NotificationGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="passwordRequireNumber" 
                    checked={securitySettings.passwordRequireNumber}
                    onChange={handleSecurityChange}
                  />
                  Require Number
                </FormCheckboxLabel>
              </NotificationGroup>
              
              <NotificationGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="passwordRequireSymbol" 
                    checked={securitySettings.passwordRequireSymbol}
                    onChange={handleSecurityChange}
                  />
                  Require Special Character
                </FormCheckboxLabel>
              </NotificationGroup>
            </SettingsSection>
          </SettingsForm>
        )}
      </SettingsContent>
      
      <SaveButtonContainer>
        <Button 
          variant="primary" 
          size="lg" 
          onClick={handleSaveSettings}
        >
          💾 Save All Changes
        </Button>
      </SaveButtonContainer>
    </SettingsContainer>
  )
}

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const SettingsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.md};
  }
`

const SettingsTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0;
`

const SaveButton = styled(Button)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => `${theme.colors.success}15`};
  color: ${({ theme }) => theme.colors.success};
  padding: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const SuccessIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`

const SettingsTabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  margin-bottom: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    border-bottom: none;
    gap: ${({ theme }) => theme.space.xs};
  }
`

const SettingsTab = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
  background-color: transparent;
  border: none;
  border-bottom: 3px solid ${({ active, theme }) => 
    active ? theme.colors.primary : 'transparent'
  };
  color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.lightText
  };
  font-weight: ${({ active, theme }) => 
    active ? theme.fontWeights.semiBold : theme.fontWeights.medium
  };
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => `${theme.colors.primary}05`};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    border: 1px solid ${({ active, theme }) => 
      active ? theme.colors.primary : theme.colors.lightGray
    };
    border-radius: ${({ theme }) => theme.radii.md};
    padding: ${({ theme }) => theme.space.md};
    justify-content: center;
  }
`

const SettingsContent = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`

const SettingsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0 0 ${({ theme }) => theme.space.sm} 0;
  padding-bottom: ${({ theme }) => theme.space.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const FormLabel = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.darkText};
`

const FormInput = styled.input`
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const FormTextarea = styled.textarea`
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const FormSelect = styled.select`
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
`

const FormCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  cursor: pointer;
  user-select: none;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const FormCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`

const FormHint = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin-top: ${({ theme }) => theme.space.xs};
`

const FormActions = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: ${({ theme }) => theme.space.sm};
`

const NotificationGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
  padding: ${({ theme }) => theme.space.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  
  &:last-child {
    border-bottom: none;
  }
`

const NotificationDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin-left: 26px; /* Align with checkbox label text */
`

const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space.md};
`

export default AdminSettings
