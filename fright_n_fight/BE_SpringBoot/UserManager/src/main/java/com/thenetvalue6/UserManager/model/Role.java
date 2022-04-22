package com.thenetvalue6.UserManager.model;

public enum Role {
    ROLE_USER(Authorities.USER_AUTHORITIES),
    ROLE_MOD(Authorities.MOD_AUTHORITIES),
    ROLE_ADMIN(Authorities.ADMIN_AUTHORITIES);

    private String[] authorities;

    Role(String... authorities) {
        this.authorities = authorities;
    }

    public String[] getAuthorities() {
        return authorities;
    }
}
