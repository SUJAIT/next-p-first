/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns:[
            {
                protocol:"https",
                hostname: "*",
                port: "",
                pathname: "/**"
            }
        ]
    }
};

export default nextConfig;

//image onno kono website theka nila akna parmissino dia dita hoi