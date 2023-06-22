import { useState } from "react";
// import { Configuration, OpenAIApi } from "openai";
// import axios from "axios";

const Assistant = () => {
    const [data, setData] = useState("");
    // const key = "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";
    // const configuration = new Configuration({
    //     organization: "org-0EwH5mu7AY0A6Cr6n1vkdFZV",
    //     apiKey: key,
    // });
    // const openai = new OpenAIApi(configuration);

    // const handleSubmit = () => {
    //     openai.createChatCompletion({
    //         model: "text-davinci-003",
    //         prompt: "Say this is a test",
    //         max_tokens: 3,
    //         temperature: 0,
    //     }).then((res)=>console.log(res));
    // };

    return (
        <>
            <h1>{data}</h1><br/>
            <input
                placeholder="Ask something..."
                type="text"
                onChange={(e) => setData(e.target.value)}
            />
            <br />
            <button >Submit</button>
        </>
    );
};

export default Assistant;
