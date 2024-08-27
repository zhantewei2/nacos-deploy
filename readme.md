
mysql script地址: https://github.com/alibaba/nacos/blob/develop/distribution/conf/mysql-schema.sql

github :
https://github.com/nacos-group/nacos-docker

1. 开启权限认证:
NACOS_AUTH_ENABLE: true 

2. 配置token: `openssl rand -hex 32`,可以通过次命令生成

NACOS_AUTH_TOKEN: SecretKey012345678901234567890123456789012345678901234567890123456789 

3. 开启网页访问

NACOS_AUTH_USER_AGENT_AUTH_WHITE_ENABLE: true
