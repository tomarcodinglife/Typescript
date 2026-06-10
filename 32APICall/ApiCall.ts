
type User = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    followers: number;
    following: number;
};

interface ApiResponse {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    followers: number;
    following: number;
}



async function apiCall(): Promise <User> {
    const apiurl = "https://api.github.com/users/sujitsoftengg";
    const result = await fetch(apiurl);
    const data = await result.json() as User;
    // console.log(data);
    return data;
}

apiCall().then((data : User) => {
    console.log(data);
}).catch((error) => {
    console.error("Error fetching data:", error);
});


// Alternative implementation with error handling

async function APIcall(): Promise <ApiResponse> {
    const apiurl = "https://api.github.com/users/sujitsoftengg";
    try {
        const result = await fetch(apiurl);
        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`);
        }
        const data: ApiResponse = await result.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

APIcall().then((data : ApiResponse) => {
    console.log(data);
    console.log(`Followers: ${data.followers}`);
    console.log(`Following: ${data.following}`);
}).catch((error) => {    
    console.error("Error fetching data:", error);
});