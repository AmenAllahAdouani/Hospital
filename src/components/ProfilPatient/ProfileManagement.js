import React, { useState } from 'react';
import './ProfileManagement.css';

function Button({ children, onClick }) {
    return (
        <button onClick={onClick} className="button">
            {children}
        </button>
    );
}

function Card({ children }) {
    return <div className="card">{children}</div>;
}

function CardHeader({ children }) {
    return <div className="card-header">{children}</div>;
}

function CardContent({ children }) {
    return <div className="card-content">{children}</div>;
}

function CardFooter({ children }) {
    return <div className="card-footer">{children}</div>;
}

function CardTitle({ children }) {
    return <h2 className="card-title">{children}</h2>;
}

function CardDescription({ children }) {
    return <p className="card-description">{children}</p>;
}

function Input({ id, type = 'text', defaultValue }) {
    return (
        <input
            id={id}
            type={type}
            defaultValue={defaultValue}
            className="input"
        />
    );
}

function Label({ htmlFor, children }) {
    return (
        <label htmlFor={htmlFor} className="label">
            {children}
        </label>
    );
}

function Tabs({ children, defaultValue }) {
    const [activeTab, setActiveTab] = useState(defaultValue);
    return React.Children.map(children, child =>
        React.cloneElement(child, { activeTab, setActiveTab })
    );
}

function TabsList({ children, activeTab, setActiveTab }) {
    return (
        <div className="tabs-list">
            {React.Children.map(children, child =>
                React.cloneElement(child, { activeTab, setActiveTab })
            )}
        </div>
    );
}

function TabsTrigger({ value, children, activeTab, setActiveTab }) {
    return (
        <button
            className={`tabs-trigger ${activeTab === value ? 'active' : ''}`}
            onClick={() => setActiveTab(value)}
        >
            {children}
        </button>
    );
}

function TabsContent({ children, value, activeTab }) {
    return activeTab === value ? <div className="tabs-content">{children}</div> : null;
}

function Profile() {
    return (
        <div>
            <Tabs defaultValue="account" className="tabs">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>Account Information</CardTitle>
                            <CardDescription>
                                You can update your account details here.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="field">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" defaultValue="Radhi" />
                            </div>
                            <div className="field">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" defaultValue="Maddouri" />
                            </div>
                            <div className="field">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" defaultValue="radhimaddouri2@gmail.com" />
                            </div>
                            <div className="field">
                                <Label htmlFor="phone">Phone</Label>
                                <Input id="phone" defaultValue="54255143" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle>Change Password</CardTitle>
                            <CardDescription>
                                Ensure your account is using a long, random password to stay secure.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="field">
                                <Label htmlFor="currentPassword">Current Password</Label>
                                <Input id="currentPassword" type="password" />
                            </div>
                            <div className="field">
                                <Label htmlFor="newPassword">New Password</Label>
                                <Input id="newPassword" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save Password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default Profile;
