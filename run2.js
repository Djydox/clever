#!/bin/sh
UUID=${UUID:-'d21b10ab-b8d0-43c1-a6a0-baf2bf131f76'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
