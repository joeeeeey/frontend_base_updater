init_config:
	cp config/config.tmp.js config/config.js

update_all:
	node scripts/updateAll.js

remove_userless_branch:
	node scripts/removeUselessBranch.js