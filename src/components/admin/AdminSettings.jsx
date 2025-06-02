import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../ui/Button'

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('general')
  
  // General settings
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'TrueFans CONNECT™',
    siteDescription: 'Connecting artists with their supporters',
    supportEmail: 'support@truefans.com',
    adminEmail: 'admin@truefans.com',
    timezone: 'America/New_York',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    maintenanceMode: false
  })
  
  // Notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    artistSignups: true,
    venueSignups: true,
    newDonations: true,
    supportRequests: true,
    systemAlerts: true,
    marketingEmails: false,
    digestFrequency: 'daily'
  })
  
  // Security settings
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    sessionTimeout: '30',
    passwordExpiry: '90',
    minimumPasswordLength: '12',
    requireSpecialChars: true,
    requireNumbers: true,
    requireUppercase: true,
    maxLoginAttempts: '5',
    ipRestriction: false,
    allowedIPs: ''
  })
  
  // API settings
  const [apiSettings, setApiSettings] = useState({
    enablePublicAPI: true,
    rateLimit: '100',
    requireAPIKey: true,
    logAPIRequests: true,
    apiVersion: 'v1',
    webhookURL: '',
    enableWebhooks: false
  })
  
  // Payment settings
  const [paymentSettings, setPaymentSettings] = useState({
    platformFee: '20',
    minimumPayout: '50',
    payoutSchedule: 'monthly',
    paymentGateways: ['stripe', 'paypal'],
    testMode: true,
    automaticPayouts: true,
    currencyCode: 'USD',
    taxRate: '0'
  })
  
  // Handle input change for general settings
  const handleGeneralChange = (e) => {
    const { name, value, type, checked } = e.target
    setGeneralSettings({
      ...generalSettings,
      [name]: type === 'checkbox' ? checked : value
    })
  }
  
  // Handle input change for notification settings
  const handleNotificationChange = (e) => {
    const { name, value, type, checked } = e.target
    setNotificationSettings({
      ...notificationSettings,
      [name]: type === 'checkbox' ? checked : value
    })
  }
  
  // Handle input change for security settings
  const handleSecurityChange = (e) => {
    const { name, value, type, checked } = e.target
    setSecuritySettings({
      ...securitySettings,
      [name]: type === 'checkbox' ? checked : value
    })
  }
  
  // Handle input change for API settings
  const handleApiChange = (e) => {
    const { name, value, type, checked } = e.target
    setApiSettings({
      ...apiSettings,
      [name]: type === 'checkbox' ? checked : value
    })
  }
  
  // Handle input change for payment settings
  const handlePaymentChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (name === 'paymentGateways') {
      const gateway = value
      const updatedGateways = [...paymentSettings.paymentGateways]
      
      if (checked) {
        if (!updatedGateways.includes(gateway)) {
          updatedGateways.push(gateway)
        }
      } else {
        const index = updatedGateways.indexOf(gateway)
        if (index !== -1) {
          updatedGateways.splice(index, 1)
        }
      }
      
      setPaymentSettings({
        ...paymentSettings,
        paymentGateways: updatedGateways
      })
    } else {
      setPaymentSettings({
        ...paymentSettings,
        [name]: type === 'checkbox' ? checked : value
      })
    }
  }
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would save to a database or API
    alert('Settings saved successfully!')
  }
  
  // Generate API key
  const generateApiKey = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < 32; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }
  
  return (
    <SettingsContainer>
      <SettingsHeader>
        <SettingsTitle>Platform Settings</SettingsTitle>
        <SettingsDescription>
          Configure system-wide settings for the TrueFans CONNECT™ platform.
        </SettingsDescription>
      </SettingsHeader>
      
      <SettingsContent>
        <SettingsSidebar>
          <SettingsNavItem 
            active={activeTab === 'general'} 
            onClick={() => setActiveTab('general')}
          >
            General
          </SettingsNavItem>
          <SettingsNavItem 
            active={activeTab === 'notifications'} 
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
          </SettingsNavItem>
          <SettingsNavItem 
            active={activeTab === 'security'} 
            onClick={() => setActiveTab('security')}
          >
            Security
          </SettingsNavItem>
          <SettingsNavItem 
            active={activeTab === 'api'} 
            onClick={() => setActiveTab('api')}
          >
            API
          </SettingsNavItem>
          <SettingsNavItem 
            active={activeTab === 'payments'} 
            onClick={() => setActiveTab('payments')}
          >
            Payments
          </SettingsNavItem>
        </SettingsSidebar>
        
        <SettingsMain>
          {activeTab === 'general' && (
            <SettingsForm onSubmit={handleSubmit}>
              <SettingsSectionTitle>General Settings</SettingsSectionTitle>
              
              <FormGroup>
                <FormLabel htmlFor="siteName">Site Name</FormLabel>
                <FormInput 
                  type="text" 
                  id="siteName" 
                  name="siteName" 
                  value={generalSettings.siteName}
                  onChange={handleGeneralChange}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="siteDescription">Site Description</FormLabel>
                <FormTextarea 
                  id="siteDescription" 
                  name="siteDescription" 
                  value={generalSettings.siteDescription}
                  onChange={handleGeneralChange}
                  rows="3"
                />
              </FormGroup>
              
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="supportEmail">Support Email</FormLabel>
                  <FormInput 
                    type="email" 
                    id="supportEmail" 
                    name="supportEmail" 
                    value={generalSettings.supportEmail}
                    onChange={handleGeneralChange}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="adminEmail">Admin Email</FormLabel>
                  <FormInput 
                    type="email" 
                    id="adminEmail" 
                    name="adminEmail" 
                    value={generalSettings.adminEmail}
                    onChange={handleGeneralChange}
                  />
                </FormGroup>
              </FormRow>
              
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="timezone">Timezone</FormLabel>
                  <FormSelect 
                    id="timezone" 
                    name="timezone" 
                    value={generalSettings.timezone}
                    onChange={handleGeneralChange}
                  >
                    <option value="America/New_York">Eastern Time (ET)</option>
                    <option value="America/Chicago">Central Time (CT)</option>
                    <option value="America/Denver">Mountain Time (MT)</option>
                    <option value="America/Los_Angeles">Pacific Time (PT)</option>
                    <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                    <option value="Europe/Paris">Central European Time (CET)</option>
                    <option value="Asia/Tokyo">Japan Standard Time (JST)</option>
                    <option value="Australia/Sydney">Australian Eastern Time (AET)</option>
                  </FormSelect>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="dateFormat">Date Format</FormLabel>
                  <FormSelect 
                    id="dateFormat" 
                    name="dateFormat" 
                    value={generalSettings.dateFormat}
                    onChange={handleGeneralChange}
                  >
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    <option value="MMMM D, YYYY">MMMM D, YYYY</option>
                  </FormSelect>
                </FormGroup>
              </FormRow>
              
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="timeFormat">Time Format</FormLabel>
                  <FormSelect 
                    id="timeFormat" 
                    name="timeFormat" 
                    value={generalSettings.timeFormat}
                    onChange={handleGeneralChange}
                  >
                    <option value="12h">12-hour (AM/PM)</option>
                    <option value="24h">24-hour</option>
                  </FormSelect>
                </FormGroup>
                
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="maintenanceMode" 
                      checked={generalSettings.maintenanceMode}
                      onChange={handleGeneralChange}
                    />
                    Enable Maintenance Mode
                  </FormCheckboxLabel>
                  <FormHelpText>
                    When enabled, the site will display a maintenance message to all non-admin users.
                  </FormHelpText>
                </FormGroup>
              </FormRow>
              
              <FormActions>
                <Button type="submit" variant="primary">Save Changes</Button>
                <Button type="button" variant="outline">Reset to Defaults</Button>
              </FormActions>
            </SettingsForm>
          )}
          
          {activeTab === 'notifications' && (
            <SettingsForm onSubmit={handleSubmit}>
              <SettingsSectionTitle>Notification Settings</SettingsSectionTitle>
              
              <FormGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="emailNotifications" 
                    checked={notificationSettings.emailNotifications}
                    onChange={handleNotificationChange}
                  />
                  Enable Email Notifications
                </FormCheckboxLabel>
                <FormHelpText>
                  Master toggle for all email notifications from the platform.
                </FormHelpText>
              </FormGroup>
              
              <FormDivider />
              
              <FormSubtitle>Admin Notifications</FormSubtitle>
              
              <NotificationGrid>
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="artistSignups" 
                      checked={notificationSettings.artistSignups}
                      onChange={handleNotificationChange}
                      disabled={!notificationSettings.emailNotifications}
                    />
                    New Artist Signups
                  </FormCheckboxLabel>
                </FormGroup>
                
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="venueSignups" 
                      checked={notificationSettings.venueSignups}
                      onChange={handleNotificationChange}
                      disabled={!notificationSettings.emailNotifications}
                    />
                    New Venue Signups
                  </FormCheckboxLabel>
                </FormGroup>
                
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="newDonations" 
                      checked={notificationSettings.newDonations}
                      onChange={handleNotificationChange}
                      disabled={!notificationSettings.emailNotifications}
                    />
                    New Donations
                  </FormCheckboxLabel>
                </FormGroup>
                
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="supportRequests" 
                      checked={notificationSettings.supportRequests}
                      onChange={handleNotificationChange}
                      disabled={!notificationSettings.emailNotifications}
                    />
                    Support Requests
                  </FormCheckboxLabel>
                </FormGroup>
                
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="systemAlerts" 
                      checked={notificationSettings.systemAlerts}
                      onChange={handleNotificationChange}
                      disabled={!notificationSettings.emailNotifications}
                    />
                    System Alerts
                  </FormCheckboxLabel>
                </FormGroup>
                
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="marketingEmails" 
                      checked={notificationSettings.marketingEmails}
                      onChange={handleNotificationChange}
                      disabled={!notificationSettings.emailNotifications}
                    />
                    Marketing Emails
                  </FormCheckboxLabel>
                </FormGroup>
              </NotificationGrid>
              
              <FormDivider />
              
              <FormGroup>
                <FormLabel htmlFor="digestFrequency">Admin Digest Frequency</FormLabel>
                <FormSelect 
                  id="digestFrequency" 
                  name="digestFrequency" 
                  value={notificationSettings.digestFrequency}
                  onChange={handleNotificationChange}
                  disabled={!notificationSettings.emailNotifications}
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="never">Never</option>
                </FormSelect>
                <FormHelpText>
                  How often to receive summary reports of platform activity.
                </FormHelpText>
              </FormGroup>
              
              <FormActions>
                <Button type="submit" variant="primary">Save Changes</Button>
                <Button type="button" variant="outline">Reset to Defaults</Button>
              </FormActions>
            </SettingsForm>
          )}
          
          {activeTab === 'security' && (
            <SettingsForm onSubmit={handleSubmit}>
              <SettingsSectionTitle>Security Settings</SettingsSectionTitle>
              
              <FormGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="twoFactorAuth" 
                    checked={securitySettings.twoFactorAuth}
                    onChange={handleSecurityChange}
                  />
                  Require Two-Factor Authentication for Admins
                </FormCheckboxLabel>
                <FormHelpText>
                  Adds an extra layer of security by requiring a verification code in addition to password.
                </FormHelpText>
              </FormGroup>
              
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="sessionTimeout">Session Timeout (minutes)</FormLabel>
                  <FormInput 
                    type="number" 
                    id="sessionTimeout" 
                    name="sessionTimeout" 
                    value={securitySettings.sessionTimeout}
                    onChange={handleSecurityChange}
                    min="5"
                    max="1440"
                  />
                  <FormHelpText>
                    How long until an inactive user is automatically logged out.
                  </FormHelpText>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="passwordExpiry">Password Expiry (days)</FormLabel>
                  <FormInput 
                    type="number" 
                    id="passwordExpiry" 
                    name="passwordExpiry" 
                    value={securitySettings.passwordExpiry}
                    onChange={handleSecurityChange}
                    min="0"
                    max="365"
                  />
                  <FormHelpText>
                    How often users must change their password. Use 0 for never.
                  </FormHelpText>
                </FormGroup>
              </FormRow>
              
              <FormDivider />
              
              <FormSubtitle>Password Requirements</FormSubtitle>
              
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="minimumPasswordLength">Minimum Length</FormLabel>
                  <FormInput 
                    type="number" 
                    id="minimumPasswordLength" 
                    name="minimumPasswordLength" 
                    value={securitySettings.minimumPasswordLength}
                    onChange={handleSecurityChange}
                    min="8"
                    max="32"
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="maxLoginAttempts">Max Login Attempts</FormLabel>
                  <FormInput 
                    type="number" 
                    id="maxLoginAttempts" 
                    name="maxLoginAttempts" 
                    value={securitySettings.maxLoginAttempts}
                    onChange={handleSecurityChange}
                    min="3"
                    max="10"
                  />
                </FormGroup>
              </FormRow>
              
              <PasswordRequirementsGrid>
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="requireSpecialChars" 
                      checked={securitySettings.requireSpecialChars}
                      onChange={handleSecurityChange}
                    />
                    Require Special Characters
                  </FormCheckboxLabel>
                </FormGroup>
                
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="requireNumbers" 
                      checked={securitySettings.requireNumbers}
                      onChange={handleSecurityChange}
                    />
                    Require Numbers
                  </FormCheckboxLabel>
                </FormGroup>
                
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="requireUppercase" 
                      checked={securitySettings.requireUppercase}
                      onChange={handleSecurityChange}
                    />
                    Require Uppercase Letters
                  </FormCheckboxLabel>
                </FormGroup>
              </PasswordRequirementsGrid>
              
              <FormDivider />
              
              <FormGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="ipRestriction" 
                    checked={securitySettings.ipRestriction}
                    onChange={handleSecurityChange}
                  />
                  Enable IP Restriction for Admin Access
                </FormCheckboxLabel>
                <FormHelpText>
                  Limit admin access to specific IP addresses.
                </FormHelpText>
              </FormGroup>
              
              {securitySettings.ipRestriction && (
                <FormGroup>
                  <FormLabel htmlFor="allowedIPs">Allowed IP Addresses</FormLabel>
                  <FormTextarea 
                    id="allowedIPs" 
                    name="allowedIPs" 
                    value={securitySettings.allowedIPs}
                    onChange={handleSecurityChange}
                    rows="3"
                    placeholder="Enter one IP address per line"
                  />
                  <FormHelpText>
                    Enter one IP address per line. Use CIDR notation for IP ranges (e.g., 192.168.1.0/24).
                  </FormHelpText>
                </FormGroup>
              )}
              
              <FormActions>
                <Button type="submit" variant="primary">Save Changes</Button>
                <Button type="button" variant="outline">Reset to Defaults</Button>
              </FormActions>
            </SettingsForm>
          )}
          
          {activeTab === 'api' && (
            <SettingsForm onSubmit={handleSubmit}>
              <SettingsSectionTitle>API Settings</SettingsSectionTitle>
              
              <FormGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="enablePublicAPI" 
                    checked={apiSettings.enablePublicAPI}
                    onChange={handleApiChange}
                  />
                  Enable Public API
                </FormCheckboxLabel>
                <FormHelpText>
                  Allow external applications to access the TrueFans API.
                </FormHelpText>
              </FormGroup>
              
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="rateLimit">Rate Limit (requests per minute)</FormLabel>
                  <FormInput 
                    type="number" 
                    id="rateLimit" 
                    name="rateLimit" 
                    value={apiSettings.rateLimit}
                    onChange={handleApiChange}
                    min="10"
                    max="1000"
                    disabled={!apiSettings.enablePublicAPI}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="apiVersion">API Version</FormLabel>
                  <FormSelect 
                    id="apiVersion" 
                    name="apiVersion" 
                    value={apiSettings.apiVersion}
                    onChange={handleApiChange}
                    disabled={!apiSettings.enablePublicAPI}
                  >
                    <option value="v1">v1 (Current)</option>
                    <option value="v2">v2 (Beta)</option>
                  </FormSelect>
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="requireAPIKey" 
                    checked={apiSettings.requireAPIKey}
                    onChange={handleApiChange}
                    disabled={!apiSettings.enablePublicAPI}
                  />
                  Require API Key Authentication
                </FormCheckboxLabel>
                <FormHelpText>
                  Require API keys for all API requests.
                </FormHelpText>
              </FormGroup>
              
              {apiSettings.requireAPIKey && apiSettings.enablePublicAPI && (
                <ApiKeySection>
                  <ApiKeyHeader>
                    <ApiKeyTitle>API Keys</ApiKeyTitle>
                    <Button variant="outline" size="sm">Generate New Key</Button>
                  </ApiKeyHeader>
                  
                  <ApiKeyTable>
                    <thead>
                      <tr>
                        <th>Key Name</th>
                        <th>API Key</th>
                        <th>Created</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Production Key</td>
                        <td>
                          <ApiKeyValue>
                            {generateApiKey().substring(0, 8)}...
                            <CopyButton>Copy</CopyButton>
                          </ApiKeyValue>
                        </td>
                        <td>May 15, 2023</td>
                        <td>
                          <ApiKeyActions>
                            <Button variant="text" size="sm">Revoke</Button>
                          </ApiKeyActions>
                        </td>
                      </tr>
                      <tr>
                        <td>Development Key</td>
                        <td>
                          <ApiKeyValue>
                            {generateApiKey().substring(0, 8)}...
                            <CopyButton>Copy</CopyButton>
                          </ApiKeyValue>
                        </td>
                        <td>May 15, 2023</td>
                        <td>
                          <ApiKeyActions>
                            <Button variant="text" size="sm">Revoke</Button>
                          </ApiKeyActions>
                        </td>
                      </tr>
                    </tbody>
                  </ApiKeyTable>
                </ApiKeySection>
              )}
              
              <FormDivider />
              
              <FormGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="logAPIRequests" 
                    checked={apiSettings.logAPIRequests}
                    onChange={handleApiChange}
                    disabled={!apiSettings.enablePublicAPI}
                  />
                  Log API Requests
                </FormCheckboxLabel>
                <FormHelpText>
                  Keep a record of all API requests for monitoring and debugging.
                </FormHelpText>
              </FormGroup>
              
              <FormDivider />
              
              <FormGroup>
                <FormCheckboxLabel>
                  <FormCheckbox 
                    type="checkbox" 
                    name="enableWebhooks" 
                    checked={apiSettings.enableWebhooks}
                    onChange={handleApiChange}
                    disabled={!apiSettings.enablePublicAPI}
                  />
                  Enable Webhooks
                </FormCheckboxLabel>
                <FormHelpText>
                  Send event notifications to external URLs when certain actions occur.
                </FormHelpText>
              </FormGroup>
              
              {apiSettings.enableWebhooks && apiSettings.enablePublicAPI && (
                <FormGroup>
                  <FormLabel htmlFor="webhookURL">Default Webhook URL</FormLabel>
                  <FormInput 
                    type="url" 
                    id="webhookURL" 
                    name="webhookURL" 
                    value={apiSettings.webhookURL}
                    onChange={handleApiChange}
                    placeholder="https://"
                  />
                  <FormHelpText>
                    URL to receive webhook notifications for platform events.
                  </FormHelpText>
                </FormGroup>
              )}
              
              <FormActions>
                <Button type="submit" variant="primary">Save Changes</Button>
                <Button type="button" variant="outline">Reset to Defaults</Button>
              </FormActions>
            </SettingsForm>
          )}
          
          {activeTab === 'payments' && (
            <SettingsForm onSubmit={handleSubmit}>
              <SettingsSectionTitle>Payment Settings</SettingsSectionTitle>
              
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="platformFee">Platform Fee (%)</FormLabel>
                  <FormInput 
                    type="number" 
                    id="platformFee" 
                    name="platformFee" 
                    value={paymentSettings.platformFee}
                    onChange={handlePaymentChange}
                    min="0"
                    max="100"
                  />
                  <FormHelpText>
                    Percentage fee taken from each transaction.
                  </FormHelpText>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="minimumPayout">Minimum Payout Amount ($)</FormLabel>
                  <FormInput 
                    type="number" 
                    id="minimumPayout" 
                    name="minimumPayout" 
                    value={paymentSettings.minimumPayout}
                    onChange={handlePaymentChange}
                    min="1"
                  />
                  <FormHelpText>
                    Minimum balance required before processing payouts.
                  </FormHelpText>
                </FormGroup>
              </FormRow>
              
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="payoutSchedule">Payout Schedule</FormLabel>
                  <FormSelect 
                    id="payoutSchedule" 
                    name="payoutSchedule" 
                    value={paymentSettings.payoutSchedule}
                    onChange={handlePaymentChange}
                  >
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="manual">Manual Only</option>
                  </FormSelect>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="currencyCode">Currency</FormLabel>
                  <FormSelect 
                    id="currencyCode" 
                    name="currencyCode" 
                    value={paymentSettings.currencyCode}
                    onChange={handlePaymentChange}
                  >
                    <option value="USD">US Dollar (USD)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="GBP">British Pound (GBP)</option>
                    <option value="CAD">Canadian Dollar (CAD)</option>
                    <option value="AUD">Australian Dollar (AUD)</option>
                    <option value="JPY">Japanese Yen (JPY)</option>
                  </FormSelect>
                </FormGroup>
              </FormRow>
              
              <FormDivider />
              
              <FormSubtitle>Payment Gateways</FormSubtitle>
              
              <PaymentGatewaysGrid>
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="paymentGateways" 
                      value="stripe"
                      checked={paymentSettings.paymentGateways.includes('stripe')}
                      onChange={handlePaymentChange}
                    />
                    Stripe
                  </FormCheckboxLabel>
                </FormGroup>
                
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="paymentGateways" 
                      value="paypal"
                      checked={paymentSettings.paymentGateways.includes('paypal')}
                      onChange={handlePaymentChange}
                    />
                    PayPal
                  </FormCheckboxLabel>
                </FormGroup>
                
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="paymentGateways" 
                      value="applepay"
                      checked={paymentSettings.paymentGateways.includes('applepay')}
                      onChange={handlePaymentChange}
                    />
                    Apple Pay
                  </FormCheckboxLabel>
                </FormGroup>
                
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="paymentGateways" 
                      value="googlepay"
                      checked={paymentSettings.paymentGateways.includes('googlepay')}
                      onChange={handlePaymentChange}
                    />
                    Google Pay
                  </FormCheckboxLabel>
                </FormGroup>
              </PaymentGatewaysGrid>
              
              <FormDivider />
              
              <FormRow>
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="testMode" 
                      checked={paymentSettings.testMode}
                      onChange={handlePaymentChange}
                    />
                    Enable Test Mode
                  </FormCheckboxLabel>
                  <FormHelpText>
                    Process payments in sandbox/test environment.
                  </FormHelpText>
                </FormGroup>
                
                <FormGroup>
                  <FormCheckboxLabel>
                    <FormCheckbox 
                      type="checkbox" 
                      name="automaticPayouts" 
                      checked={paymentSettings.automaticPayouts}
                      onChange={handlePaymentChange}
                    />
                    Automatic Payouts
                  </FormCheckboxLabel>
                  <FormHelpText>
                    Process payouts automatically according to schedule.
                  </FormHelpText>
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <FormLabel htmlFor="taxRate">Default Tax Rate (%)</FormLabel>
                <FormInput 
                  type="number" 
                  id="taxRate" 
                  name="taxRate" 
                  value={paymentSettings.taxRate}
                  onChange={handlePaymentChange}
                  min="0"
                  max="100"
                />
                <FormHelpText>
                  Default tax rate for transactions. Set to 0 for no tax.
                </FormHelpText>
              </FormGroup>
              
              <FormActions>
                <Button type="submit" variant="primary">Save Changes</Button>
                <Button type="button" variant="outline">Reset to Defaults</Button>
              </FormActions>
            </SettingsForm>
          )}
        </SettingsMain>
      </SettingsContent>
    </SettingsContainer>
  )
}

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const SettingsHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const SettingsTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.sm};
`

const SettingsDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightText};
  max-width: 800px;
`

const SettingsContent = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`

const SettingsSidebar = styled.div`
  width: 250px;
  flex-shrink: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    display: flex;
    overflow-x: auto;
    padding-bottom: ${({ theme }) => theme.space.sm};
  }
`

const SettingsNavItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: ${({ theme }) => theme.space.md};
  background-color: ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => active ? theme.colors.trustworthyNavy : theme.colors.darkText};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ active, theme }) => active ? theme.fontWeights.semiBold : theme.fontWeights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  margin-bottom: ${({ theme }) => theme.space.sm};
  
  &:hover {
    background-color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.lightGray};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: auto;
    white-space: nowrap;
    margin-right: ${({ theme }) => theme.space.sm};
    margin-bottom: 0;
  }
`

const SettingsMain = styled.div`
  flex: 1;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.space.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`

const SettingsSectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
  padding-bottom: ${({ theme }) => theme.space.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
`

const FormSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin-bottom: ${({ theme }) => theme.space.md};
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const FormLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
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
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGray};
    cursor: not-allowed;
  }
`

const FormTextarea = styled.textarea`
  padding: ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: inherit;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}33`};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGray};
    cursor: not-allowed;
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
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGray};
    cursor: not-allowed;
  }
`

const FormCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.darkText};
  cursor: pointer;
`

const FormCheckbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  
  &:disabled {
    cursor: not-allowed;
  }
`

const FormHelpText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
  margin-top: ${({ theme }) => theme.space.xs};
`

const FormDivider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.mediumGray};
  margin: ${({ theme }) => theme.space.md} 0;
`

const FormActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`

const NotificationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const PasswordRequirementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const ApiKeySection = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-bottom: ${({ theme }) => theme.space.lg};
`

const ApiKeyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.md};
`

const ApiKeyTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.darkText};
  margin: 0;
`

const ApiKeyTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: ${({ theme }) => theme.space.md};
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.mediumGray};
  }
  
  th {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    color: ${({ theme }) => theme.colors.darkText};
  }
  
  td {
    color: ${({ theme }) => theme.colors.lightText};
  }
  
  tr:last-child td {
    border-bottom: none;
  }
`

const ApiKeyValue = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  font-family: monospace;
`

const CopyButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  
  &:hover {
    text-decoration: underline;
  }
`

const ApiKeyActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
`

const PaymentGatewaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

export default AdminSettings
