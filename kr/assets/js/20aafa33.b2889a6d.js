"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[6515],{8188:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>o});var r=n(5893),t=n(1151);const d={title:"server"},l="k3s server",i={id:"cli/server",title:"server",description:"In this section, you'll learn how to configure the K3s server.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/cli/server.md",sourceDirName:"cli",slug:"/cli/server",permalink:"/kr/cli/server",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/server.md",tags:[],version:"current",lastUpdatedAt:1718644918e3,frontMatter:{title:"server"},sidebar:"mySidebar",previous:{title:"\uba85\ub839\uc904 \ub3c4\uad6c",permalink:"/kr/cli/"},next:{title:"agent",permalink:"/kr/cli/agent"}},c={},o=[{value:"Critical Configuration Values",id:"critical-configuration-values",level:2},{value:"Commonly Used Options",id:"commonly-used-options",level:2},{value:"Database",id:"database",level:3},{value:"Cluster Options",id:"cluster-options",level:3},{value:"Admin Kubeconfig Options",id:"admin-kubeconfig-options",level:3},{value:"Advanced Options",id:"advanced-options",level:2},{value:"Logging",id:"logging",level:3},{value:"Listeners",id:"listeners",level:3},{value:"Data",id:"data",level:3},{value:"Secrets Encryption",id:"secrets-encryption",level:3},{value:"Networking",id:"networking",level:3},{value:"Storage Class",id:"storage-class",level:3},{value:"Kubernetes Components",id:"kubernetes-components",level:3},{value:"Customized Flags for Kubernetes Processes",id:"customized-flags-for-kubernetes-processes",level:3},{value:"Experimental Options",id:"experimental-options",level:3},{value:"Deprecated Options",id:"deprecated-options",level:3}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"k3s-server",children:"k3s server"}),"\n",(0,r.jsx)(s.p,{children:"In this section, you'll learn how to configure the K3s server."}),"\n",(0,r.jsxs)(s.p,{children:["Note that servers also run an agent, so all of the configuration options listed in the ",(0,r.jsxs)(s.a,{href:"/kr/cli/agent",children:[(0,r.jsx)(s.code,{children:"k3s agent"})," documentation"]})," are also supported on servers."]}),"\n",(0,r.jsxs)(s.p,{children:["Options are documented on this page as CLI flags, but can also be passed as configuration file options. See the ",(0,r.jsx)(s.a,{href:"/kr/installation/configuration#configuration-file",children:"Configuration File"})," documentation for more information on using YAML configuration files."]}),"\n",(0,r.jsx)(s.h2,{id:"critical-configuration-values",children:"Critical Configuration Values"}),"\n",(0,r.jsx)(s.p,{children:"The following options must be set to the same value on all servers in the cluster. Failure to do so will cause new servers to fail to join the cluster when using embedded etcd, or incorrect operation of the cluster when using an external datastore."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"--agent-token"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"--cluster-cidr"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"--cluster-dns"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"--cluster-domain"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"--disable-cloud-controller"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"--disable-helm-controller"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"--disable-network-policy"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"--disable-servicelb"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"--egress-selector-mode"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"--flannel-backend"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"--flannel-external-ip"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"--flannel-ipv6-masq"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"--secrets-encryption"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"--service-cidr"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"commonly-used-options",children:"Commonly Used Options"}),"\n",(0,r.jsx)(s.h3,{id:"database",children:"Database"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Flag"}),(0,r.jsx)(s.th,{children:"Environment Variable"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--datastore-endpoint"})," value"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_DATASTORE_ENDPOINT"})}),(0,r.jsx)(s.td,{children:"Specify etcd, Mysql, Postgres, or Sqlite (default) data source name"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--datastore-cafile"})," value"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_DATASTORE_CAFILE"})}),(0,r.jsx)(s.td,{children:"TLS Certificate Authority file used to secure datastore backend communication"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--datastore-certfile"})," value"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_DATASTORE_CERTFILE"})}),(0,r.jsx)(s.td,{children:"TLS certification file used to secure datastore backend communication"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--datastore-keyfile"})," value"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_DATASTORE_KEYFILE"})}),(0,r.jsx)(s.td,{children:"TLS key file used to secure datastore backend communication"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-expose-metrics"})}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"Expose etcd metrics to client interface (default: false)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-disable-snapshots"})}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"Disable automatic etcd snapshots"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--etcd-snapshot-name"})," value"]}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:'Set the base name of etcd snapshots. Default: etcd-snapshot-<unix-timestamp> (default:"etcd-snapshot")'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--etcd-snapshot-schedule-cron"})," value"]}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"Snapshot interval time in cron spec. eg. every 5 hours '0 */5 _ * _' (default: \"0 */12 * * *\")"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--etcd-snapshot-retention"})," value"]}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"Number of snapshots to retain (default: 5)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--etcd-snapshot-dir"})," value"]}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"Directory to save db snapshots (default: ${data-dir}/db/snapshots)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-s3"})}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"Enable backup to S3"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--etcd-s3-endpoint"})," value"]}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:'S3 endpoint url (default: "s3.amazonaws.com")'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--etcd-s3-endpoint-ca"})," value"]}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"S3 custom CA cert to connect to S3 endpoint"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-s3-skip-ssl-verify"})}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"Disables S3 SSL certificate validation"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--etcd-s3-access-key"})," value"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"AWS_ACCESS_KEY_ID"})}),(0,r.jsx)(s.td,{children:"S3 access key"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--etcd-s3-secret-key"})," value"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"AWS_SECRET_ACCESS_KEY"})}),(0,r.jsx)(s.td,{children:"S3 secret key"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--etcd-s3-bucket"})," value"]}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"S3 bucket name"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--etcd-s3-region"})," value"]}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:'S3 region / bucket location (optional) (default: "us-east-1")'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--etcd-s3-folder"})," value"]}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"S3 folder"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--etcd-s3-insecure"})}),(0,r.jsx)(s.td,{children:"Disables S3 over HTTPS"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--etcd-s3-timeout"})," value"]}),(0,r.jsx)(s.td,{children:"S3 timeout (default: 5m0s)"}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"cluster-options",children:"Cluster Options"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Flag"}),(0,r.jsx)(s.th,{children:"Environment Variable"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--token"})," value, ",(0,r.jsx)(s.code,{children:"-t"})," value"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_TOKEN"})}),(0,r.jsx)(s.td,{children:"Shared secret used to join a server or agent to a cluster"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--token-file"})," value"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_TOKEN_FILE"})}),(0,r.jsx)(s.td,{children:"File containing the cluster-secret/token"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--agent-token"})," value"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_AGENT_TOKEN"})}),(0,r.jsx)(s.td,{children:"Shared secret used to join agents to the cluster, but not servers"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--agent-token-file"})," value"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_AGENT_TOKEN_FILE"})}),(0,r.jsx)(s.td,{children:"File containing the agent secret"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--server"})," value"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_URL"})}),(0,r.jsx)(s.td,{children:"Server to connect to, used to join a cluster"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--cluster-init"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_CLUSTER_INIT"})}),(0,r.jsx)(s.td,{children:"Initialize a new cluster using embedded Etcd"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--cluster-reset"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_CLUSTER_RESET"})}),(0,r.jsx)(s.td,{children:"Forget all peers and become sole member of a new cluster"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"admin-kubeconfig-options",children:"Admin Kubeconfig Options"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Flag"}),(0,r.jsx)(s.th,{children:"Environment Variable"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--write-kubeconfig value, -o"})," value"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_KUBECONFIG_OUTPUT"})}),(0,r.jsx)(s.td,{children:"Write kubeconfig for admin client to this file"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--write-kubeconfig-mode"})," value"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_KUBECONFIG_MODE"})}),(0,r.jsxs)(s.td,{children:["Write kubeconfig with this ",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Chmod",children:"mode."})," The kubeconfig file is owned by root, and written with a default mode of 600. Changing the mode to 644 will allow it to be read by other unprivileged users on the host."]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"advanced-options",children:"Advanced Options"}),"\n",(0,r.jsx)(s.h3,{id:"logging",children:"Logging"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Flag"}),(0,r.jsx)(s.th,{children:"Default"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--debug"})}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"Turn on debug logs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"-v"})," value"]}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Number for the log level verbosity"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--vmodule"})," value"]}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"Comma-separated list of FILE_PATTERN=LOG_LEVEL settings for file-filtered logging"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--log value, -l"})," value"]}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"Log to file"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--alsologtostderr"})}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"Log to standard error as well as file (if set)"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"listeners",children:"Listeners"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Flag"}),(0,r.jsx)(s.th,{children:"Default"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--bind-address"})," value"]}),(0,r.jsx)(s.td,{children:"0.0.0.0"}),(0,r.jsx)(s.td,{children:"k3s bind address"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--https-listen-port"})," value"]}),(0,r.jsx)(s.td,{children:"6443"}),(0,r.jsx)(s.td,{children:"HTTPS listen port"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--advertise-address"})," value"]}),(0,r.jsx)(s.td,{children:"node-external-ip/node-ip"}),(0,r.jsx)(s.td,{children:"IPv4 address that apiserver uses to advertise to members of the cluster"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--advertise-port"})," value"]}),(0,r.jsx)(s.td,{children:"listen-port/0"}),(0,r.jsx)(s.td,{children:"Port that apiserver uses to advertise to members of the cluster"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--tls-san"})," value"]}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsx)(s.td,{children:"Add additional hostnames or IPv4/IPv6 addresses as Subject Alternative Names on the TLS cert"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"data",children:"Data"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Flag"}),(0,r.jsx)(s.th,{children:"Default"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--data-dir value, -d"})," value"]}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"/var/lib/rancher/k3s"})," or ",(0,r.jsx)(s.code,{children:"${HOME}/.rancher/k3s"})," if not root"]}),(0,r.jsx)(s.td,{children:"Folder to hold state"})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"secrets-encryption",children:"Secrets Encryption"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Flag"}),(0,r.jsx)(s.th,{children:"Default"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--secrets-encryption"})}),(0,r.jsx)(s.td,{children:"false"}),(0,r.jsx)(s.td,{children:"Enable Secret encryption at rest"})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"networking",children:"Networking"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Flag"}),(0,r.jsx)(s.th,{children:"Default"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--cluster-cidr"})," value"]}),(0,r.jsx)(s.td,{children:'"10.42.0.0/16"'}),(0,r.jsx)(s.td,{children:"IPv4/IPv6 network CIDRs to use for pod IPs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--service-cidr"})," value"]}),(0,r.jsx)(s.td,{children:'"10.43.0.0/16"'}),(0,r.jsx)(s.td,{children:"IPv4/IPv6 network CIDRs to use for service IPs"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--service-node-port-range"})," value"]}),(0,r.jsx)(s.td,{children:'"30000-32767"'}),(0,r.jsx)(s.td,{children:"Port range to reserve for services with NodePort visibility"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--cluster-dns"})," value"]}),(0,r.jsx)(s.td,{children:'"10.43.0.10"'}),(0,r.jsx)(s.td,{children:"IPv4 Cluster IP for coredns service. Should be in your service-cidr range"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--cluster-domain"})," value"]}),(0,r.jsx)(s.td,{children:'"cluster.local"'}),(0,r.jsx)(s.td,{children:"Cluster Domain"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--flannel-backend"})," value"]}),(0,r.jsx)(s.td,{children:'"vxlan"'}),(0,r.jsx)(s.td,{children:"One of 'none', 'vxlan', 'ipsec'(deprecated), 'host-gw', 'wireguard-native', or 'wireguard'(deprecated)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--flannel-ipv6-masq"})}),(0,r.jsx)(s.td,{children:'"N/A"'}),(0,r.jsx)(s.td,{children:"Enable IPv6 masquerading for pod"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--flannel-external-ip"})}),(0,r.jsx)(s.td,{children:'"N/A"'}),(0,r.jsx)(s.td,{children:"Use node external IP addresses for Flannel traffic"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--servicelb-namespace"})," value"]}),(0,r.jsx)(s.td,{children:'"kube-system"'}),(0,r.jsx)(s.td,{children:"Namespace of the pods for the servicelb component"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--egress-selector-mode"})," value"]}),(0,r.jsx)(s.td,{children:'"agent"'}),(0,r.jsxs)(s.td,{children:["Must be one of the following: ",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"disabled: The apiserver does not use agent tunnels to communicate with nodes. Requires that servers run agents, and have direct connectivity to the kubelet on agents, or the apiserver will not be able to function access service endpoints or perform kubectl exec and kubectl logs."}),(0,r.jsx)("li",{children:"agent: The apiserver uses agent tunnels to communicate with nodes. Nodes allow the tunnel connection from loopback addresses. Requires that servers also run agents, or the apiserver will not be able to access service endpoints. The historical default for k3s."}),(0,r.jsx)("li",{children:" pod: The apiserver uses agent tunnels to communicate with nodes and service endpoints, routing endpoint connections to the correct agent by watching Nodes. Nodes allow the tunnel connection from loopback addresses, or a CIDR assigned to their node."}),(0,r.jsx)("li",{children:"  cluster: The apiserver uses agent tunnels to communicate with nodes and service endpoints, routing endpoint connections to the correct agent by watching Endpoints. Nodes allow the tunnel connection from loopback addresses, or the configured cluster CIDR range."})]})]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"storage-class",children:"Storage Class"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Flag"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--default-local-storage-path"})," value"]}),(0,r.jsx)(s.td,{children:"Default local storage path for local provisioner storage class"})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"kubernetes-components",children:"Kubernetes Components"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Flag"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--disable"})," value"]}),(0,r.jsxs)(s.td,{children:['See "',(0,r.jsxs)(s.a,{href:"/kr/installation/packaged-components#using-the---disable-flag",children:["Using the ",(0,r.jsx)(s.code,{children:"--disable"})," flag"]}),'"']})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--disable-scheduler"})}),(0,r.jsx)(s.td,{children:"Disable Kubernetes default scheduler"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--disable-cloud-controller"})}),(0,r.jsx)(s.td,{children:"Disable k3s default cloud controller manager"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--disable-kube-proxy"})}),(0,r.jsx)(s.td,{children:"Disable running kube-proxy"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--disable-network-policy"})}),(0,r.jsx)(s.td,{children:"Disable k3s default network policy controller"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--disable-helm-controller"})}),(0,r.jsx)(s.td,{children:"Disable Helm controller"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"customized-flags-for-kubernetes-processes",children:"Customized Flags for Kubernetes Processes"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Flag"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--etcd-arg"})," value"]}),(0,r.jsx)(s.td,{children:"Customized flag for etcd process"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--kube-apiserver-arg"})," value"]}),(0,r.jsx)(s.td,{children:"Customized flag for kube-apiserver process"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--kube-scheduler-arg"})," value"]}),(0,r.jsx)(s.td,{children:"Customized flag for kube-scheduler process"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--kube-controller-manager-arg"})," value"]}),(0,r.jsx)(s.td,{children:"Customized flag for kube-controller-manager process"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--kube-cloud-controller-manager-arg"})," value"]}),(0,r.jsx)(s.td,{children:"Customized flag for kube-cloud-controller-manager process"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--kubelet-arg"})," value"]}),(0,r.jsx)(s.td,{children:"Customized flag for kubelet process"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--kube-proxy-arg"})," value"]}),(0,r.jsx)(s.td,{children:"Customized flag for kube-proxy process"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"experimental-options",children:"Experimental Options"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Flag"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--rootless"})}),(0,r.jsx)(s.td,{children:"Run rootless"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--enable-pprof"})}),(0,r.jsx)(s.td,{children:"Enable pprof endpoint on supervisor port"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--docker"})}),(0,r.jsx)(s.td,{children:"Use cri-dockerd instead of containerd"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--prefer-bundled-bin"})}),(0,r.jsx)(s.td,{children:"Prefer bundled userspace binaries over host binaries"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--disable-agent"})}),(0,r.jsxs)(s.td,{children:['See "',(0,r.jsx)(s.a,{href:"/kr/advanced#running-agentless-servers-experimental",children:"Running Agentless Servers (Experimental)"}),'"']})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"deprecated-options",children:"Deprecated Options"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Flag"}),(0,r.jsx)(s.th,{children:"Environment Variable"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"--no-flannel"})}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsxs)(s.td,{children:["Use ",(0,r.jsx)(s.code,{children:"--flannel-backend=none"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--no-deploy"})," value"]}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsxs)(s.td,{children:["Use ",(0,r.jsx)(s.code,{children:"--disable"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--cluster-secret"})," value"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"K3S_CLUSTER_SECRET"})}),(0,r.jsxs)(s.td,{children:["Use ",(0,r.jsx)(s.code,{children:"--token"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--flannel-backend"})," wireguard"]}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsxs)(s.td,{children:["Use ",(0,r.jsx)(s.code,{children:"--flannel-backend=wireguard-native"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"--flannel-backend"})," value=option1=value"]}),(0,r.jsx)(s.td,{children:"N/A"}),(0,r.jsxs)(s.td,{children:["Use ",(0,r.jsx)(s.code,{children:"--flannel-conf"})," to specify the flannel config file with the backend config"]})]})]})]}),"\n",(0,r.jsx)(s.h1,{id:"k3s-server-cli-help",children:"K3s Server CLI Help"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["If an option appears in brackets below, for example ",(0,r.jsx)(s.code,{children:"[$K3S_TOKEN]"}),", it means that the option can be passed in as an environment variable of that name."]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'NAME:\n   k3s server - Run management server\n\nUSAGE:\n   k3s server [OPTIONS]\n\nOPTIONS:\n   --config FILE, -c FILE                     (config) Load configuration from FILE (default: "/etc/rancher/k3s/config.yaml") [$K3S_CONFIG_FILE]\n   --debug                                    (logging) Turn on debug logs [$K3S_DEBUG]\n   -v value                                   (logging) Number for the log level verbosity (default: 0)\n   --vmodule value                            (logging) Comma-separated list of FILE_PATTERN=LOG_LEVEL settings for file-filtered logging\n   --log value, -l value                      (logging) Log to file\n   --alsologtostderr                          (logging) Log to standard error as well as file (if set)\n   --bind-address value                       (listener) k3s bind address (default: 0.0.0.0)\n   --https-listen-port value                  (listener) HTTPS listen port (default: 6443)\n   --advertise-address value                  (listener) IPv4 address that apiserver uses to advertise to members of the cluster (default: node-external-ip/node-ip)\n   --advertise-port value                     (listener) Port that apiserver uses to advertise to members of the cluster (default: listen-port) (default: 0)\n   --tls-san value                            (listener) Add additional hostnames or IPv4/IPv6 addresses as Subject Alternative Names on the server TLS cert\n   --data-dir value, -d value                 (data) Folder to hold state (default: /var/lib/rancher/k3s or $\\{HOME\\}/.rancher/k3s if not root)\n   --cluster-cidr value                       (networking) IPv4/IPv6 network CIDRs to use for pod IPs (default: 10.42.0.0/16)\n   --service-cidr value                       (networking) IPv4/IPv6 network CIDRs to use for service IPs (default: 10.43.0.0/16)\n   --service-node-port-range value            (networking) Port range to reserve for services with NodePort visibility (default: "30000-32767")\n   --cluster-dns value                        (networking) IPv4 Cluster IP for coredns service. Should be in your service-cidr range (default: 10.43.0.10)\n   --cluster-domain value                     (networking) Cluster Domain (default: "cluster.local")\n   --flannel-backend value                    (networking) backend<=option1=val1,option2=val2> where backend is one of \'none\', \'vxlan\', \'ipsec\' (deprecated), \'host-gw\', \'wireguard-native\', \'wireguard\' (deprecated) (default: "vxlan")\n   --flannel-ipv6-masq                        (networking) Enable IPv6 masquerading for pod\n   --flannel-external-ip                      (networking) Use node external IP addresses for Flannel traffic\n   --egress-selector-mode value               (networking) One of \'agent\', \'cluster\', \'pod\', \'disabled\' (default: "agent")\n   --servicelb-namespace value                (networking) Namespace of the pods for the servicelb component (default: "kube-system")\n   --write-kubeconfig value, -o value         (client) Write kubeconfig for admin client to this file [$K3S_KUBECONFIG_OUTPUT]\n   --write-kubeconfig-mode value              (client) Write kubeconfig with this mode [$K3S_KUBECONFIG_MODE]\n   --token value, -t value                    (cluster) Shared secret used to join a server or agent to a cluster [$K3S_TOKEN]\n   --token-file value                         (cluster) File containing the token [$K3S_TOKEN_FILE]\n   --agent-token value                        (cluster) Shared secret used to join agents to the cluster, but not servers [$K3S_AGENT_TOKEN]\n   --agent-token-file value                   (cluster) File containing the agent secret [$K3S_AGENT_TOKEN_FILE]\n   --server value, -s value                   (cluster) Server to connect to, used to join a cluster [$K3S_URL]\n   --cluster-init                             (cluster) Initialize a new cluster using embedded Etcd [$K3S_CLUSTER_INIT]\n   --cluster-reset                            (cluster) Forget all peers and become sole member of a new cluster [$K3S_CLUSTER_RESET]\n   --cluster-reset-restore-path value         (db) Path to snapshot file to be restored\n   --kube-apiserver-arg value                 (flags) Customized flag for kube-apiserver process\n   --etcd-arg value                           (flags) Customized flag for etcd process\n   --kube-controller-manager-arg value        (flags) Customized flag for kube-controller-manager process\n   --kube-scheduler-arg value                 (flags) Customized flag for kube-scheduler process\n   --kube-cloud-controller-manager-arg value  (flags) Customized flag for kube-cloud-controller-manager process\n   --datastore-endpoint value                 (db) Specify etcd, Mysql, Postgres, or Sqlite (default) data source name [$K3S_DATASTORE_ENDPOINT]\n   --datastore-cafile value                   (db) TLS Certificate Authority file used to secure datastore backend communication [$K3S_DATASTORE_CAFILE]\n   --datastore-certfile value                 (db) TLS certification file used to secure datastore backend communication [$K3S_DATASTORE_CERTFILE]\n   --datastore-keyfile value                  (db) TLS key file used to secure datastore backend communication [$K3S_DATASTORE_KEYFILE]\n   --etcd-expose-metrics                      (db) Expose etcd metrics to client interface. (default: false)\n   --etcd-disable-snapshots                   (db) Disable automatic etcd snapshots\n   --etcd-snapshot-name value                 (db) Set the base name of etcd snapshots (default: etcd-snapshot-<unix-timestamp>) (default: "etcd-snapshot")\n   --etcd-snapshot-schedule-cron value        (db) Snapshot interval time in cron spec. eg. every 5 hours \'* */5 * * *\' (default: "0 */12 * * *")\n   --etcd-snapshot-retention value            (db) Number of snapshots to retain (default: 5)\n   --etcd-snapshot-dir value                  (db) Directory to save db snapshots. (default: $\\{data-dir\\}/db/snapshots)\n   --etcd-snapshot-compress                   (db) Compress etcd snapshot\n   --etcd-s3                                  (db) Enable backup to S3\n   --etcd-s3-endpoint value                   (db) S3 endpoint url (default: "s3.amazonaws.com")\n   --etcd-s3-endpoint-ca value                (db) S3 custom CA cert to connect to S3 endpoint\n   --etcd-s3-skip-ssl-verify                  (db) Disables S3 SSL certificate validation\n   --etcd-s3-access-key value                 (db) S3 access key [$AWS_ACCESS_KEY_ID]\n   --etcd-s3-secret-key value                 (db) S3 secret key [$AWS_SECRET_ACCESS_KEY]\n   --etcd-s3-bucket value                     (db) S3 bucket name\n   --etcd-s3-region value                     (db) S3 region / bucket location (optional) (default: "us-east-1")\n   --etcd-s3-folder value                     (db) S3 folder\n   --etcd-s3-insecure                         (db) Disables S3 over HTTPS\n   --etcd-s3-timeout value                    (db) S3 timeout (default: 5m0s)\n   --default-local-storage-path value         (storage) Default local storage path for local provisioner storage class\n   --disable value                            (components) Do not deploy packaged components and delete any deployed components (valid items: coredns, servicelb, traefik, local-storage, metrics-server)\n   --disable-scheduler                        (components) Disable Kubernetes default scheduler\n   --disable-cloud-controller                 (components) Disable k3s default cloud controller manager\n   --disable-kube-proxy                       (components) Disable running kube-proxy\n   --disable-network-policy                   (components) Disable k3s default network policy controller\n   --disable-helm-controller                  (components) Disable Helm controller\n   --node-name value                          (agent/node) Node name [$K3S_NODE_NAME]\n   --with-node-id                             (agent/node) Append id to node name\n   --node-label value                         (agent/node) Registering and starting kubelet with set of labels\n   --node-taint value                         (agent/node) Registering kubelet with set of taints\n   --image-credential-provider-bin-dir value  (agent/node) The path to the directory where credential provider plugin binaries are located (default: "/var/lib/rancher/credentialprovider/bin")\n   --image-credential-provider-config value   (agent/node) The path to the credential provider plugin config file (default: "/var/lib/rancher/credentialprovider/config.yaml")\n   --docker                                   (agent/runtime) (experimental) Use cri-dockerd instead of containerd\n   --container-runtime-endpoint value         (agent/runtime) Disable embedded containerd and use the CRI socket at the given path; when used with --docker this sets the docker socket path\n   --pause-image value                        (agent/runtime) Customized pause image for containerd or docker sandbox (default: "rancher/mirrored-pause:3.6")\n   --snapshotter value                        (agent/runtime) Override default containerd snapshotter (default: "overlayfs")\n   --private-registry value                   (agent/runtime) Private registry configuration file (default: "/etc/rancher/k3s/registries.yaml")\n   --system-default-registry value            (agent/runtime) Private registry to be used for all system images [$K3S_SYSTEM_DEFAULT_REGISTRY]\n   --node-ip value, -i value                  (agent/networking) IPv4/IPv6 addresses to advertise for node\n   --node-external-ip value                   (agent/networking) IPv4/IPv6 external IP addresses to advertise for node\n   --resolv-conf value                        (agent/networking) Kubelet resolv.conf file [$K3S_RESOLV_CONF]\n   --flannel-iface value                      (agent/networking) Override default flannel interface\n   --flannel-conf value                       (agent/networking) Override default flannel config file\n   --flannel-cni-conf value                   (agent/networking) Override default flannel cni config file\n   --kubelet-arg value                        (agent/flags) Customized flag for kubelet process\n   --kube-proxy-arg value                     (agent/flags) Customized flag for kube-proxy process\n   --protect-kernel-defaults                  (agent/node) Kernel tuning behavior. If set, error if kernel tunables are different than kubelet defaults.\n   --secrets-encryption                       Enable secret encryption at rest\n   --enable-pprof                             (experimental) Enable pprof endpoint on supervisor port\n   --rootless                                 (experimental) Run rootless\n   --prefer-bundled-bin                       (experimental) Prefer bundled userspace binaries over host binaries\n   --selinux                                  (agent/node) Enable SELinux in containerd [$K3S_SELINUX]\n   --lb-server-port value                     (agent/node) Local port for supervisor client load-balancer. If the supervisor and apiserver are not colocated an additional port 1 less than this port will also be used for the apiserver client load-balancer. (default: 6444) [$K3S_LB_SERVER_PORT]\n'})})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>l});var r=n(7294);const t={},d=r.createContext(t);function l(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);